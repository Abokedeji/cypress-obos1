let signup

before(()=>{
    cy.fixture('elements').then(sel =>{
        
        signup = sel.elements.signupPage
    })
})

Cypress.Commands.add('clickAnyButtonWithText', (text) => {
    cy.get('button').contains(text).click()
 })

 Cypress.Commands.add('clickNextbutton', () => {
    cy.get('button').click()
  })

  Cypress.Commands.add('clickhowYouHeardAboutUs', (text) => {
    cy.get(signup.howYouHeardAboutUs).click()
    cy.get('#scrollableDiv').contains(text).scrollIntoView().click()
  })

  Cypress.Commands.add('insertPassword', () => {
    cy.get(signup.passwordField).type('Text@1234')
 })

 Cypress.Commands.add('clickSignupbutton', () => {
    cy.get('button').click()
  })