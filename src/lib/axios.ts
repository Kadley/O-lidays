import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  // Permet d'indiquer à axios d'envoyer les cookies de la requête
  withCredentials: true,
});
