import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Bem-vindo ao Avaliador de Vizinhanças</h1>
      <p className="home-subtitle">
        Veja avaliações de bairros, compartilhe sua experiência e escolha melhor onde morar.
      </p>

      <nav className="home-buttons">
        <Link to="/login" className="home-button">Login</Link>
        <Link to="/cadastro" className="home-button">Cadastro</Link>
        <Link to="/avaliar" className="home-button">Avaliar um Bairro</Link>
      </nav>
    </div>
  );
}

export default Home;
