import React, { useEffect, useState } from 'react';
import { getAllCountries } from './Services/api';
import PaisCard from './components/PaisCard';
import Busca from './components/Busca';
import './App.css';

function App() {
  const [paises, setPaises] = useState([]);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    const buscarPaises = async () => {
      const dados = await getAllCountries();
      setPaises(dados);
    };
    buscarPaises();
  }, []);

  const paisesFiltrados = paises
    .filter((pais) =>
      pais.name.common.toLowerCase().includes(filtro.toLowerCase())
    )
    .slice(0, 10);

  return (
    <div className="App">
      <h1>🌍 Atlas Interativo</h1>
      <Busca valor={filtro} aoMudar={setFiltro} />
      <div className="lista-paises">
        {paisesFiltrados.map((pais) => (
          <PaisCard
            key={pais.cca3}
            nome={pais.name.common}
            capital={pais.capital ? pais.capital[0] : 'N/A'}
            regiao={pais.region}
            populacao={pais.population}
            bandeira={pais.flags.png}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
