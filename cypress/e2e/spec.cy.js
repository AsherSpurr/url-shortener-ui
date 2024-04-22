describe('empty spec', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/urls', {
      statusCode: 200,
      fixture: 'fetchUrl',
    }).as('fetchUrls')
    cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
      statusCode: 200,
      body: {
        id: 3,
        long_url: 'https://legacy.reactjs.org/docs/shallow-renderer.html',
        short_url: 'http://localhost:3001/useshorturl/3',
        title: 'test',
      }
    }).as('postUrls')
    .visit('http://localhost:3000/')
  })

  it('should display urls from fetch', () => {
    //Need to actually POST the information in the 2nd block -> copy and paste the title and URL to the form
    cy.get('.url').first().within(() => {
      cy.get('h3').contains('Awesome photo')
      .get('a').contains( 'useshorturl/1')
      .get('p').contains('https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
    })
    cy.get('.url').last().within(() => {
      cy.get('h3').contains('Showcase Inspo')
      .get('a').contains( 'useshorturl/2')
      .get('p').contains('https://dribbble.com/shots/16387845-Place-Finder-Maps')
    })
  })

  it('Should show form and type into its inputs',() => {
    cy.get('h1').contains('URL Shortener')
    .get('form')
    .get('input[name=title]').type('test')
    .get('input[name=url]').type('https://legacy.reactjs.org/docs/shallow-renderer.html')
    .get('button').click()
    cy.get('.url').last().within(() => {
      cy.get('h3').contains('test')
      // .get('a').contains( 'useshorturl/3')
      .get('p').contains('https://legacy.reactjs.org/docs/shallow-renderer.html')
    })
  })
})