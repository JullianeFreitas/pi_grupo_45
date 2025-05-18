import React, { useState } from 'react';
import '../styles/auth.css';
import { useNavigate } from 'react-router-dom';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleCadastro = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost/avaliador-backend/register.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, senha }),
      });

      const data = await response.json();

      if (data.mensagem) {
        alert(data.mensagem);
        navigate('/login'); // Redireciona para login após cadastro
      } else {
        alert(data.erro || 'Erro ao cadastrar');
      }
    } catch (err) {
      console.error('Erro ao cadastrar:', err);
      alert('Erro ao tentar cadastrar');
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleCadastro}>
        <h2>Cadastro</h2>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
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
