
describe('Sign up', () => {
    it('How you heard about us - Twitter', () => {
        cy.typeInBasicDetails();
        cy.clickNextbutton();
        cy.clickhowYouHeardAboutUs('Twitter');
        cy.insertPassword();
        cy.clickSignupbutton();
    });

    it('How you heard about us - Webinar/Seminar', () => {
        cy.typeInBasicDetails();
        cy.clickNextbutton();
        cy.clickhowYouHeardAboutUs('Webinar/Seminar');
        cy.insertPassword();
        cy.clickSignupbutton();
    });

    it('How you heard about us - Instagram', () => {
        cy.typeInBasicDetails();
        cy.clickNextbutton();
        cy.clickhowYouHeardAboutUs('Instagram');
        cy.insertPassword();
        cy.clickSignupbutton();
    });

    it('How you heard about us - Facebook', () => {
        cy.typeInBasicDetails();
        cy.clickNextbutton();
        cy.clickhowYouHeardAboutUs('Facebook');
        cy.insertPassword();
        cy.clickSignupbutton();
    });

    it('How you heard about us - Google Search', () => {
        cy.typeInBasicDetails();
        cy.clickNextbutton();
        cy.clickhowYouHeardAboutUs('Google Search');
        cy.insertPassword();
        cy.clickSignupbutton();
    });

    it('How you heard about us - Friends & Family', () => {
        cy.typeInBasicDetails();
        cy.clickNextbutton();
        cy.clickhowYouHeardAboutUs('Friends & Family');
        cy.insertPassword();
        cy.clickSignupbutton();
    });

    it('How you heard about us - Mima Sales Agent', () => {
        cy.typeInBasicDetails();
        cy.clickNextbutton();
        cy.clickhowYouHeardAboutUs('Mima Sales Agent');
        cy.insertPassword();
        cy.clickSignupbutton();
    });

    it('How you heard about us - Others', () => {
        cy.typeInBasicDetails();
        cy.clickNextbutton();
        cy.clickhowYouHeardAboutUs('Others');
        cy.insertPassword();
        cy.clickSignupbutton();
    });
});
