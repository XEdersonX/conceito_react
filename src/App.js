import React from 'react';

import Header from './components/Header';

/**
 * 3 CONCEITOS MAIS IMPORTANTES DO REACT:
 * 
 * Componente
 * Propriedade
 * Estado & Imutabilidade
 */

//Criando função de componentizacao
function App() {
  return(
    //fragments
    <>
      <Header title="Homepage">
        <ul>
          <li>Homepage</li>
          <li>Projects</li>
        </ul>
      </Header>
      <Header title="Projects">
        <ul>
          <li>Homepage</li>
          <li>Projects</li>
          <li>Login</li>
        </ul>
      </Header>
    </>
  );
}

export default App;