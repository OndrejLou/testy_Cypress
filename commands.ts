// //WIKIPEDIA SEARCH
Cypress.Commands.add('WikipediaSearch', (term) =>{
    cy.get('input@searchImput').should('be.visible').type('${teerm}{enter}')
})



// LANGUAGE CHECK
Cypress.Commands.add('LanguageCheck', (languageName, languageUrl, welcomeText) => {
    cy.get('input#searchInput').should('be.empty')
    cy.contains('Read Wikipedia in your language').should('be.visible').click()
    cy.contains('a', languageName).should('be.visible').click()
    cy.url().should('include', languageUrl)
    cy.contains(welcomeText).should('be.visible')
  });



// LOG IN TO WIKIPEDIA
Cypress.Commands.add('loginToWikipedia', () => {
  cy.visit('https://en.wikipedia.org/wiki/Main_Page')

  cy.contains('Log in').should('be.visible').click()

  cy.url().should('include', '/w/index.php?title=Special:UserLogin&returnto=Main+Page')

  cy.contains('Username').should('be.visible')
  cy.get('input[name="wpName"]').should('have.attr', 'placeholder', 'Enter your username')

  cy.contains('Password').should('be.visible')
  cy.get('input[name="wpPassword"]').should('have.attr', 'placeholder', 'Enter your password')
})



// TERMS OF USE CHECK
Cypress.Commands.add('TermsOfUseCheck', () => {
  cy.visit('https://meta.wikimedia.org/wiki/List_of_Wikipedias')
  cy.contains('Terms of Use').click()
  cy.url().should('include', 'https://foundation.wikimedia.org/wiki/Policy:Terms_of_Use')
  cy.contains('Wikimedia Foundation Terms of Use').should('be.visible')
})

