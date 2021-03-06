import axios from 'axios';
import User from '../models/User';

const BASE = 'http://gateway:8000';

export const findByUsername = async (username: string): Promise<User> => {
  try {
    const response = await axios.get(`${BASE}/api/users/auth/${username}`);
    if (response.data.banned) {
      return null;
    } else {
      return response.data;
    }
  } catch (error) {
    return null;
  }
};
