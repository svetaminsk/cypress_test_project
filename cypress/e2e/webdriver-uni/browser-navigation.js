/// <reference types="Cypress" />

describe("Validate webdriver uni homepage links", () => {
    it("Confirm links redirect to the correct pages", () => {
        cy.visit("http://www.webdriveruniversity.com/");
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true});
        cy.url().should('include', 'contactus');
        cy.go('back');
        cy.reload();

        cy.get('#to-do-list').invoke('removeAttr', 'target').click({force: true});
        cy.url().should('include', 'To-Do-List');
        cy.go('back');
        cy.title().should('contain', 'WebDriverUniversity.com');      
    });
})