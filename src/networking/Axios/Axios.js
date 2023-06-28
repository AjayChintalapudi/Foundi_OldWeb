import axios from 'axios';

const axiosInstance = axios.create({
<<<<<<< HEAD
  baseURL: 'http://192.168.29.109:3001/api/v1',
});

=======
  baseURL: 'http://192.168.29.238:3001/api/v1',
});

axiosInstance.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
  'auth'
)}`;

>>>>>>> 537e398826ec4aca8337112f8b54c4b87851ea00
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || 'something went wrong'
    )
);
<<<<<<< HEAD
axiosInstance.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
  'auth'
)}`;
=======

>>>>>>> 537e398826ec4aca8337112f8b54c4b87851ea00
export default axiosInstance;
