import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import NewsList from './components/NewsList';

function App() {

  // define category and news
  const [ category, setCategory ] = useState('');
  const [ news, setNews ] = useState([]);

  useEffect( () => {
    const callAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=gb&categoty=${category}&apiKey=cfb24d92ed9b4861a12e93c1fc8762aa`;
      const result = await fetch(url);
      const news = await result.json();
      setNews(news.articles);
    }
    callAPI();
  }, [category]);

  return (
    <Fragment>
        <Header title='Search News' />
        <div className="container white">
          <Form
          setCategory={setCategory}
          />

          <NewsList
            news={news}
          />
        </div>
    </Fragment>
  );
}

export default App;
