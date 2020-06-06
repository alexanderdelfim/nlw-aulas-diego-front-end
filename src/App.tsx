import React, { useState } from 'react';
import './App.css';


import Header from './Header';

function App() {
  
  const [counter, setCounter] = useState(0);  //[Valor do estado, Função para atualizar o valor do estado]
  
  function handleButtonClick() {
    setCounter(counter + 1);
    console.log(counter)
  }

  return (
    <div>
      <Header title={`Contador: ${counter}`}/>
      <h1>Conteudo da aplicação</h1>
      <h2>Valor do contador: {counter}</h2>
      <button type="button" onClick={handleButtonClick}>Aumentar</button>
    </div>
  );
}

export default App;
