import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from './UserContext';

const RotaPrivada = ({ children }) => {
  const { usuario } = useContext(UserContext);

  return usuario ? children : <Navigate to="/login" />;
};

export default RotaPrivada;
