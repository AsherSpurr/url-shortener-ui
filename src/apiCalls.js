export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => {
        // console.log(response.json())
        return response.json()
      })
}

export const postUrls = (newUrl) => {
  return fetch('http://localhost:3001/api/v1/urls', {
    method: 'POST',
    body: JSON.stringify(newUrl),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {return response.json()})
}
