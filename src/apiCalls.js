export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => {
        // console.log(response.json())
        return response.json()
      })
}
