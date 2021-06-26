import React, { Fragment, useState, useEffect } from 'react';
import Header from "./components/Header";
import Form from "./components/Form";
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  // Definir la categoria y noticias
  const [ categoria, setCategoria ] = useState('');
  const [ news, setNews ] =useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=109286d44ec54223981be14952e74424`;

      const respuesta = await fetch(url);
      const news = await respuesta.json();

      setNews(news.articles);
    } 
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header 
        titulo='Buscador de Noticias'
      />

      <div className="container white">
        <Form 
          setCategoria={setCategoria}
        />

        <ListadoNoticias
          news={news}
        />
      </div>
    </Fragment>
  );
}

export default App;
