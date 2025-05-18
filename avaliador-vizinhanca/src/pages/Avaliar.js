import React, { useState } from 'react';
import '../styles/avaliar.css';

export default function Avaliar() {
  const [bairro, setBairro] = useState('');
  const [nota, setNota] = useState('');
  const [comentario, setComentario] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const novaAvaliacao = { bairro, nota, comentario };
    const avaliacoesExistentes = JSON.parse(localStorage.getItem('avaliacoes')) || [];

    avaliacoesExistentes.push(novaAvaliacao);
    localStorage.setItem('avaliacoes', JSON.stringify(avaliacoesExistentes));

    alert('Avaliação registrada com sucesso!');
    setBairro('');
    setNota('');
    setComentario('');
  };

  return (
    <div className="avaliar-container">
      <h2>Avalie um Bairro</h2>
      <form className="avaliar-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome do Bairro"
          value={bairro}
          onChange={(e) => setBairro(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Nota (0 a 10)"
          value={nota}
          onChange={(e) => setNota(e.target.value)}
          min="0"
          max="10"
          required
        />
        <textarea
          placeholder="Comentário"
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
          required
        />
        <button type="submit">Enviar Avaliação</button>
      </form>
    </div>
  );
}
