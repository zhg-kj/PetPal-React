import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
});

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('access_token');
  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
});

const refreshAccessToken = async (refreshToken) => {
  try {
    const response = await axios.post(process.env.REACT_APP_API_URL + '/account/token/refresh/', {
      refresh_token: refreshToken,
    });

    const newAccessToken = response.data.access;
    localStorage.setItem('access_token', newAccessToken);

    return newAccessToken;
  } catch (error) {
    throw error;
  }
};

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const newAccessToken = await refreshAccessToken(localStorage.getItem('refresh_token'));

        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

        return api(originalRequest);
      } catch (refreshError) {
        throw refreshError;
      }
    }

    return Promise.reject(error);
  },
);

export default api;