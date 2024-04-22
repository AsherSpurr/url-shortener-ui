import React, { useState, useEffect } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';
import { postUrls } from '../../apiCalls';

function App () {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    getUrls()
    .then(data => {
      // console.log(data.urls)
      setUrls(data.urls)
    })
  }, [])

  const addUrl = (newUrl) => {
    postUrls(newUrl)
    .then(data => {
      setUrls([...urls, data])
    })
  }

  return (
    <main className="App">
      <header>
        <h1>URL Shortener</h1>
        <UrlForm addUrl={addUrl}/>
      </header>
      <UrlContainer urls={urls}/>
    </main>
  );
}

export default App;
