
// Import commands.js using ES2015 syntax:
import './commands';
import 'cypress-fill-command'
import './custom-commands/homepage';
import './custom-commands/common-actions';
import './custom-commands/signuppage';
beforeEach(()=>{
    cy.on('uncaught:exception', ()=>{
        return false
    })
    cy.visit('/');
    cy.clickSignupBtn();
})



            