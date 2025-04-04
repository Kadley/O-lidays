import type { IUser } from '@/@types/user';
import { axiosInstance } from '@/lib/axios';

export const authService = {
  async signin(data: { email: string; password: string }) {
    const response = await axiosInstance.post('/v1/auth/signin', data);

    return response.data as IUser;
  },

  async signup(data: { email: string; password: string; name: string }) {
    const response = await axiosInstance.post('/v1/auth/signup', data);

    return response.data as IUser;
  },
};
