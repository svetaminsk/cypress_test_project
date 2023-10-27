/// <reference types="Cypress" />

describe("Verify radio buttons via webdriver uni", () => {
    beforeEach(() => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true});
    })
    
    it("Check specific radio buttons", () => {     
        cy.get('#radio-buttons').find('[value=green]').check()
    });

    it("Validate the states of specific radio buttons", () => {
        cy.get('[value=lettuce').should('not.be.checked');
        cy.get('[value=cabbage').should('be.disabled');
        cy.get('[value=pumpkin').should('be.checked')
    });
})