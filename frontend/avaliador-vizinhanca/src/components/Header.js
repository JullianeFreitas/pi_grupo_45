import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import '../styles/header.css';

export default function Header() {
  const { usuario, logout } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1 className="logo" onClick={() => navigate('/')}>Avaliador de Bairros</h1>
      <nav className="nav-links">
        {!usuario ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/cadastro">Cadastro</Link>
          </>
        ) : (
          <>
            <span>Olá, {usuario.nome}</span>
            <button onClick={() => { logout(); navigate('/'); }}>Logout</button>
          </>
        )}
      </nav>
    </header>
  );
}
