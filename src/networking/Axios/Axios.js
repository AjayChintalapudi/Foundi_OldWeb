import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.29.109:3001/api/v1',
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || 'something went wrong'
    )
);
axiosInstance.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
  'auth'
)}`;
export default axiosInstance;
