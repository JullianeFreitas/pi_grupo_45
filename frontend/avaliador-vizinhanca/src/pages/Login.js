import React, { useState, useContext } from 'react';
import '../styles/auth.css';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../components/UserContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost/avaliador-backend/login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (data.usuario) {
        login(data.usuario);
        alert(data.mensagem || 'Login efetuado com sucesso!');
        navigate('/avaliar');
      } else {
        alert(data.erro || 'Erro ao tentar fazer login');
      }
    } catch (err) {
      console.error('Erro ao logar:', err);
      alert('Erro ao tentar fazer login');
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
