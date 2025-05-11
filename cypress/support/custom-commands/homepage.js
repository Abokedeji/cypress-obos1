let homepage
let signup
let login

before(()=>{
    cy.fixture('elements').then(sel =>{
        homepage = sel.elements.homepage
        signup = sel.elements.signupPage
        login = sel.elements.loginPage
    })
})

Cypress.Commands.add('clickSignupBtn', () => {
    cy.get(homepage.homepageSignupBtn).click()
 })

 Cypress.Commands.add('clickLoginBtn', () => {
    cy.get(homepage.homepageLoginBtn).click()
 })

 