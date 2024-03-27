import './commands'


// WIKIPEDIA SEARCH

declare global {
    namespace Cypress {
      interface Chainable {
        WikipediaSearch(term: string): Chainable<Element>
      }
    }
  }
    


// LANGUAGE CHECK

declare global {
    namespace Cypress {
      interface Chainable {
        /**
         * Custom command to check main features of the home page based on language.
         * @example cy.checkLanguageFeature('Čeština', '//cs.wikipedia.org', 'Vítejte ve Wikipedii')
         */
        LanguageCheck(languageName: string, languageUrl: string, welcomeText: string): Chainable<Element>
      }
    }
  }
  


// LOG IN TO WIKIPEDIA
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to check the presence of login fields on English Wikipedia.
       */
      loginToWikipedia(): Chainable<void>
    }
  }
}



// TERMS OF USE CHECK
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to verify the "Terms of Use" page functionality.
       */
      TermsOfUseCheck(): Chainable<void>
    }
  }
}




  