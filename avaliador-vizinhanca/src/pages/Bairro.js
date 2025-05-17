import React, { useEffect, useState } from 'react';
import '../styles/bairro.css';

function Bairro() {
  const [avaliacoes, setAvaliacoes] = useState([]);

  useEffect(() => {
    const dados = localStorage.getItem('avaliacoes');
    if (dados) {
      setAvaliacoes(JSON.parse(dados));
    }
  }, []);

  return (
    <div className="bairro-container">
      <h2>Avaliações dos Bairros</h2>

      {avaliacoes.length === 0 ? (
        <p>Nenhuma avaliação disponível ainda.</p>
      ) : (
        <ul className="lista-avaliacoes">
          {avaliacoes.map((avaliacao, index) => (
            <li key={index} className="item-avaliacao">
              <h3>{avaliacao.bairro}</h3>
              <p><strong>Nota:</strong> {avaliacao.nota}</p>
              <p><strong>Comentário:</strong> {avaliacao.comentario}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Bairro;
