import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
  let authToken = localStorage.getItem('authToken');
  return authToken ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
