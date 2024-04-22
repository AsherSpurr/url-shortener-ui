describe('empty spec', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/urls', {
      statusCode: 200,
      fixture: 'fetchUrl',
    }).as('fetchUrls')
    .visit('http://localhost:3000/')
  })
  it('should display urls from fetch', () => {
    cy.get('.url')
  })
})