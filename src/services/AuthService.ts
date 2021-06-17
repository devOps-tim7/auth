import { findByUsername } from '../services/UserService';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import AuthException from '../exceptions/AuthException';

const login = async (username: string, password: string) => {
  const user = await findByUsername(username);
  if (!user) {
    throw new AuthException(400, 'Username or password is wrong');
  }
  const validPass = await bcrypt.compare(password, user.password);
  if (!validPass) {
    throw new AuthException(400, 'Username or password is wrong');
  }
  return jwt.sign(
    { id: user.id, username: user.username, email: user.email, role: user.role },
    process.env.TOKEN_SECRET
  );
};

export default {
  login,
};
