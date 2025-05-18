import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import '../styles/avaliacoes.css';

const Avaliacoes = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const [avaliacoes, setAvaliacoes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost/avaliador-backend/avaliacoes.php?bairro_id=${id}`)
      .then(res => res.json())
      .then(data => setAvaliacoes(data))
      .catch(err => console.error('Erro ao buscar avaliações:', err));
  }, [id]);

  return (
    <div className="avaliacoes-container">
      <button onClick={() => navigate('/bairro')} className="botao-voltar">
        ← Voltar para os Bairros
      </button>
      <h2 className="titulo">Avaliações de {state?.nome || 'Bairro'}</h2>
      {avaliacoes.length === 0 ? (
        <p className="mensagem">Nenhuma avaliação encontrada.</p>
      ) : (
        <ul className="lista-avaliacoes">
          {avaliacoes.map(av => (
            <li key={av.id} className="avaliacao-item">
            <p className="usuario"><strong>{av.usuario}</strong></p>
            <div className="estrelas">
              {[...Array(5)].map((_, i) => (
              <span key={i} className={i < av.nota ? "estrela ativa" : "estrela"}>★</span>
              ))}
            </div>
            <p className="comentario">{av.comentario}</p>
            <small className="data">{new Date(av.data).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Avaliacoes;
