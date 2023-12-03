import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem('token') !== null;
  return isAuthenticated ? (
    element
  ) : (
    <Navigate to="/login" replace={true} state={{ from: '/' }} />
  );
};

export default PrivateRoute;
