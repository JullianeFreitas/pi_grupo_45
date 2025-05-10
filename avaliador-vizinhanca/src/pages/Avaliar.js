import React, { useState } from 'react';
import '../styles/avaliacao.css';

function Avaliar() {
  const [bairro, setBairro] = useState('');
  const [nota, setNota] = useState(0);
  const [comentario, setComentario] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ bairro, nota, comentario });
    alert("Avaliação enviada com sucesso!");
    setBairro('');
    setNota(0);
    setComentario('');
  };

  return (
    <div className="avaliacao-container">
      <form onSubmit={handleSubmit} className="avaliacao-form">
        <h2>Avalie sua Vizinhança</h2>

        <label htmlFor="bairro">Nome do Bairro</label>
        <input
          id="bairro"
          type="text"
          placeholder="Ex: Centro"
          value={bairro}
          onChange={(e) => setBairro(e.target.value)}
          required
        />

        <label htmlFor="nota">Nota (0 a 5)</label>
        <input
          id="nota"
          type="number"
          min="0"
          max="5"
          value={nota}
          onChange={(e) => setNota(e.target.value)}
          required
        />

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
