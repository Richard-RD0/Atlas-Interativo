import React from 'react';

const PaisCard = ({ nome, capital, regiao, populacao, bandeira }) => {
  return (
    <div className="pais-card">
      <img src={bandeira} alt={`Bandeira de ${nome}`} />
      <h3>{nome}</h3>
      <p><strong>Capital:</strong> {capital}</p>
      <p><strong>Continente:</strong> {regiao}</p>
      <p><strong>População:</strong> {populacao.toLocaleString()}</p>
  
    </div>
  );
};

export default PaisCard;
