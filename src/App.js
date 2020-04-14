import React, { useState } from 'react';

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
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

  /**
   * useState retorna um array com 2 posições
   * 
   * 1. Variável com o seu valor inicial
   * 2. Função para atualizarmos esse valor
   */

  function hundleAddProject(){
    //projects.push(`Novo projeto ${Date.now()}`);

    //...projects - utilizado para percorrer o array e copiar todos os projetos.
    setProjects([...projects, `Novo projeto ${Date.now()}`]);

    console.log(projects);
  }

  return(
    //map - utilizado para percorrer.

    //fragments
    <>
      <Header title="Projects" />

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={hundleAddProject}>Adicionar projeto</button>
    </>
  );
}

export default App;