import React, { useState } from 'react';
import '../styles/auth.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Pega usuários cadastrados
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verifica se existe usuário com email e senha iguais
    const usuarioValido = usuarios.find(
      (user) => user.email === email && user.senha === senha
    );

    if (usuarioValido) {
      alert('Login realizado com sucesso!');
      // Aqui você pode redirecionar para a home ou para a página de avaliação
      // Exemplo usando window.location:
      window.location.href = '/avaliar'; 
    } else {
      alert('Email ou senha incorretos. Tente novamente.');
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleLogin}>
        <h2>Login</h2>
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
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
