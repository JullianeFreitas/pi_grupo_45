import React, { useState } from 'react';
import '../styles/auth.css';

export default function Cadastro() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = (e) => {
    e.preventDefault();
    console.log('Cadastro:', { email, senha });
    // Aqui vai a chamada de API para criar conta
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleCadastro}>
        <h2>Cadastro</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
