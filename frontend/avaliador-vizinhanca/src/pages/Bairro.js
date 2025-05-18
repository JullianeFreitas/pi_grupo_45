import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/bairro.css';

const Bairro = () => {
  const [bairros, setBairros] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost/avaliador-backend/bairros.php')
        .then(res => res.json())
    //   .then(data => setBairros(data))
        .then(data => {
            console.log("bairros recebidos: ", data);
            setBairros(data);
        })
        .catch(err => console.error('Erro ao buscar bairros:', err));
  }, []);

  const handleSelecionar = (id, nome) => {
    navigate(`/avaliacoes/${id}`, { state: { nome } });
  };

  return (
    <div className="bairro-container">
      <h2 className="titulo">Selecione um Bairro</h2>
      <ul className="lista-avaliacoes">
        {bairros.map(bairro => (
          <li
            key={bairro.id}
            className="avaliacao-item"
            onClick={() => handleSelecionar(bairro.id, bairro.nome)}
            style={{ cursor: 'pointer' }}
          >
            {bairro.nome}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bairro;
