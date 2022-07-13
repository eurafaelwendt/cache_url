import './App.css';
import React, { useState } from 'react';

function App() {

  const [metadata, setMetadata] = useState('');
  const [metadataparcial, setMetadataParcial] = useState('');
  const [route, setRoute] = useState('');
  const [routeparcial, setRouteParcial] = useState('');

  const listenerInputMetada = event => {
    const { value } = event.target;
    setMetadata(value);
  }

  const listenerInputRoute = event => {
    const { value } = event.target;
    setRoute(value);
  }

  const Gerar = () => {
    var findMetaData = metadata.match("pathname")
    var findRoute = route.match("pathname")
    { metadata && findMetaData && setMetadataParcial(metadata.slice(0, findMetaData.index - 1)) }
    { route && findRoute && setRouteParcial(route.slice(0, findRoute.index - 1)) }
  }

  const Limpar = () => {
    setMetadata('');
    setRoute('');
    setMetadataParcial('');
    setRouteParcial('');
  }

  const Resultado = () => {
    return (
      <div>
        <div className='resultado'>
          {metadata}<br />
          {metadataparcial}<br />
          {route}<br />
          {routeparcial}
        </div>
        <div>
          {(metadata || route) && <button onClick={Limpar}>Limpar</button>}
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <h2>LIMPEZA DE CACHE - URL</h2>
      <div className='Campos'><input value={metadata} onChange={listenerInputMetada} placeholder='Insira a URL inteira do Metadata'></input></div>
      <div className='Campos'><input value={route} onChange={listenerInputRoute} placeholder='Insira a URL inteira do Route'></input></div>
      <button onClick={Gerar}>Gerar</button>
      <Resultado></Resultado>
    </div>
  );
}

export default App;
