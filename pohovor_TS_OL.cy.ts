// WIKIPEDIA SEARCH
describe('Wikipedia main functionality', () => {

  it('Loads the main page and searches for an article', () => {
    cy.visit('https://www.wikipedia.org')
    
    //'Software testing can be replaced 
    cy.WikipediaSearch('Software testing')

    cy.contains('h1', 'Software testing').should('be.visible')
  })


// LANGUAGE CHECK
  describe('Wikipedia main functionality', () => {

    it('Main features of the home page', () => {
      cy.visit('https://www.wikipedia.org');
      cy.LanguageCheck('Čeština', '//cs.wikipedia.org', 'Vítejte ve Wikipedii')
    })
  
})


//LOG IN TO WIKIPEDIA
describe('English Wikipedia login fields', () => {

  it('should display login fields with correct placeholders', () => {
    cy.loginToWikipedia()
   
  })

})



// TERMS OF USE CHECK
describe('Terms of use test', () => {

  it('Terms of use', () => {
    cy.TermsOfUseCheck()
  
  })

})






})

