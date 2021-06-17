import { createServer } from '../../server';
import supertest from 'supertest';
import * as UserService from '../services/UserService';
import bcrypt from 'bcrypt';
import User from '../models/User';
import { Role } from '../helpers/shared';

const app = createServer();

const spy = jest
  .spyOn(UserService, 'findByUsername')
  .mockResolvedValueOnce(
    new User({ username: 'user', password: bcrypt.hashSync('user', 10), role: Role.User })
  )
  .mockResolvedValue(null);

describe('test AuthController', () => {
  it('successfully logs in', async () => {
    const response = await supertest(app).post('/api/auth/login').send({
      username: 'user',
      password: 'user',
    });
    expect(spy).toBeCalled();
    expect(spy).toHaveBeenCalledWith('user');
    expect(response.status).toBe(200);
  });

  it('fails to log in', async () => {
    const response = await supertest(app).post('/api/auth/login').send({
      username: 'nonuser',
      password: 'user',
    });
    expect(spy).toBeCalled();
    expect(spy).toHaveBeenCalledWith('nonuser');
    expect(response.status).toBe(400);
  }, 15000);
});
