import React, { useState } from 'react';
import '../styles/auth.css';

export default function Cadastro() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = (e) => {
    e.preventDefault();

    // Pega os usuários já cadastrados no localStorage (ou cria um array vazio)
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verifica se o email já está cadastrado
    const emailExiste = usuarios.some((user) => user.email === email);

    if (emailExiste) {
      alert('Este email já está cadastrado. Por favor, faça login.');
      return;
    }

  
    usuarios.push({ email, senha });

    // Salva novamente no localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Cadastro realizado com sucesso! Agora faça login.');

  
    setEmail('');
    setSenha('');
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
