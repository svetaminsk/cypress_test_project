/// <reference types="Cypress" />

describe("Verify checkboxes via webdriver-uni", () => {
    beforeEach(() => {
        cy.log(Cypress.env("name"))
        cy.NavigateTo_Webdriveruni();
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true});
    })
    
    it("Check and validate checkbox", () => {      
        cy.get('[value=option-1]').check().should('be.checked');
    });

    it("Check and validate checkbox - improved", () => {
        cy.get('[value=option-1]').as('first_checkbox');
        cy.get('@first_checkbox').check();
        cy.get('@first_checkbox').should('be.checked');
    });

    it("Uncheck and validate checkbox", () => {
        cy.get('[value=option-3]').as('checkbox3');
        cy.get('@checkbox3').uncheck();
        cy.get('@checkbox3').should('not.be.checked');
    });

    it("Check and validate multiple checkboxes", () => {
        cy.get('[type=checkbox]').check(["option-1", "option-2", "option-4"]).should('be.checked');

    });
})