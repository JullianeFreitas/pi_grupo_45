import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../components/UserContext';
import '../styles/avaliacao.css';

function Avaliar() {
  const [bairros, setBairros] = useState([]);
  const [bairroId, setBairroId] = useState('');
  const [nota, setNota] = useState(0);
  const [comentario, setComentario] = useState('');

  const {usuario} = useContext(UserContext);

  useEffect(() => {
    fetch('http://localhost/avaliador-backend/bairros.php')
      .then(res => res.json())
      .then(data => setBairros(data))
      .catch(err => console.error('Erro ao buscar bairros:', err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bairroId || nota === 0) {
      alert("Selecione um bairro e uma nota.");
      return;
    };

    if (!usuario) {
      alert("Voce precisa estar logado para avaliar.");
      return;
    };

    fetch('http://localhost/avaliador-backend/avaliar.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id_usuario: usuario.id,
        id_bairro: bairroId,
        nota,
        comentario,
      })
    })
      .then(res => res.text())
      .then(data => {
        alert("Avaliação enviada com sucesso!");
        setBairroId('');
        setNota(0);
        setComentario('');
      })
      .catch(err => {
        console.error("Erro ao enviar avaliação:", err);
        alert("Erro ao enviar avaliação.");
      });
  };

  return (
    <div className="avaliacao-container">
      <form onSubmit={handleSubmit} className="avaliacao-form">
        <h2>Avalie sua Vizinhança</h2>

        <label htmlFor="bairro">Bairro</label>
        <select
          id="bairro"
          value={bairroId}
          onChange={(e) => setBairroId(e.target.value)}
          required
        >
          <option value="">Selecione um bairro</option>
          {bairros.map(b => (
            <option key={b.id} value={b.id}>{b.nome}</option>
          ))}
        </select>

        <label>Nota</label>
        <div className="estrelas-interativas">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={i < nota ? 'estrela ativa' : 'estrela'}
              onClick={() => setNota(i + 1)}
            >
              ★
            </span>
          ))}
        </div>

        <label htmlFor="comentario">Comentário</label>
        <textarea
          id="comentario"
          rows="4"
          placeholder="Conte como é viver nesse bairro..."
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
        />

        <button type="submit">Enviar Avaliação</button>
      </form>
    </div>
  );
}

export default Avaliar;
