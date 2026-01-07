import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config) => {
    // Add auth token if available (could be from cookies or store)
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
