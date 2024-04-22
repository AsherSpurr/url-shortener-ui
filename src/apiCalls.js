export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => {
        if(!response.ok) {
          throw new Error('Uh oh')
        }
        return response.json()
      })
}
