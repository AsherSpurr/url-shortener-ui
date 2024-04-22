import React, { useState } from 'react';


function UrlForm({ addUrl }) {
  const [title, setTitle] = useState('');
  const [urlToShorten, setUrlToShorten] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const newUrl = {
      long_url: urlToShorten,
      title: title,
    }
    addUrl(newUrl)
    clearInputs();
  }

  const clearInputs = () => {
    setTitle('');
    setUrlToShorten('');
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <input
        type='text'
        placeholder='Title...'
        name='title'
        value={title}
        required
        onChange={e => setTitle(e.target.value)}
      />

      <input
        type='text'
        placeholder='URL to Shorten...'
        name='url'
        value={urlToShorten}
        required
        onChange={e => setUrlToShorten(e.target.value)}
      />

      <button type='submit'>
        Shorten Please!
      </button>
    </form>
  )
}

export default UrlForm;
