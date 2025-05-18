import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('usuarioLogado');
    if (userData) {
      setUsuario(JSON.parse(userData));
    }
  }, []);

  const login = (user) => {
    localStorage.setItem('usuarioLogado', JSON.stringify(user));
    setUsuario(user);
  };

  const logout = () => {
    localStorage.removeItem('usuarioLogado');
    setUsuario(null);
  };

  return (
    <UserContext.Provider value={{ usuario, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};