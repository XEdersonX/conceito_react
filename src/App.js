import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';
import backgroundImage from './assets/backgroud.jpg';

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
  const [projects, setProjects] = useState([]);

  //funcao  e  quando vai ser disparada
  useEffect(() => {
    api.get('/projects').then(response => {
      //console.log(response);
      setProjects(response.data)
    });
  }, []);

  /**
   * useState retorna um array com 2 posições
   * 
   * 1. Variável com o seu valor inicial
   * 2. Função para atualizarmos esse valor
   */

  async function hundleAddProject() {
    //projects.push(`Novo projeto ${Date.now()}`);

    //...projects - utilizado para percorrer o array e copiar todos os projetos.
    //setProjects([...projects, `Novo projeto ${Date.now()}`]);

    const response = await api.post('/projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: "Diego Fernandes"
    });

    const project = response.data;

    setProjects([...projects, project])

    console.log(projects);
  }

  return(
    //map - utilizado para percorrer.

    //fragments
    <>
      <Header title="Projects" />

      <img width={300} src={backgroundImage}/>

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={hundleAddProject}>Adicionar projeto</button>
    </>
  );
}

export default App;