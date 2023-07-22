import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.1.32:3001/api/v1',
});

axiosInstance.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
  'authToken'
)}`;

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || 'something went wrong'
    )
);
export default axiosInstance;
