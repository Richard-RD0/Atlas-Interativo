import React from 'react';

const Busca = ({ valor, aoMudar }) => {
  return (
    <input
      type="text"
      placeholder="Buscar país..."
      value={valor}
      onChange={(e) => aoMudar(e.target.value)}
    />
  );
};

export default Busca;
