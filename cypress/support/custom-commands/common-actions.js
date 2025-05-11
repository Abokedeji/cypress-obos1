import { fakerEN_NG as faker} from "@faker-js/faker"
let homepage
let signup
let login

Cypress.Commands.add('typeInBasicDetails', () => {
    const inputs = [
        faker.person.fullName(),
        faker.company.buzzNoun(),
        faker.internet.email({provider: 'yopmail.com'}),
        faker.phone.number({style: 'international'}),
        faker.string.numeric({length: {min:5, max:7}})

    ]
    cy.get('input').each(($el, index)=>{
        cy.wrap($el).fill(inputs[index])
    })
 })
 