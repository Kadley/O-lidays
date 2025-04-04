import type { IProperty, IPropertyFull } from '@/@types/property';
import { axiosInstance } from '@/lib/axios';
import type { CreatePropertySchema } from '@/schemas/property';

export const propertyService = {
  async getAllProperties() {
    const response = await axiosInstance.get('/v1/properties');

    return response.data as IProperty[];
  },

  async getOneProperty(id: number) {
    const response = await axiosInstance.get(`/v1/properties/${id}`);

    return response.data as IPropertyFull;
  },

  async getMyProperties() {
    const response = await axiosInstance.get('/v1/account/properties');

    return response.data as IProperty[];
  },

  async createProperty(data: CreatePropertySchema) {
    const response = await axiosInstance.post('/v1/properties', data);

    return response.data as IProperty;
  },
};
