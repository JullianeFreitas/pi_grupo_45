import React, { useState } from 'react';
import '../styles/auth.css';

export default function Cadastro() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = (e) => {
    e.preventDefault();

    // Pega lista de usuários já cadastrados no localStorage ou cria um array vazio
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verifica se já existe um usuário com esse email
    const usuarioExistente = usuarios.find(u => u.email === email);
    if (usuarioExistente) {
      alert('Esse email já está cadastrado!');
      return;
    }

    // Adiciona o novo usuário na lista
    usuarios.push({ email, senha });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Cadastro realizado com sucesso!');
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
