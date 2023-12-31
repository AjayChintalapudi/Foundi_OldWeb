import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.29.238:3001/api/v1',
});

axiosInstance.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
  'auth'
)}`;

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || 'something went wrong'
    )
);
export default axiosInstance;
