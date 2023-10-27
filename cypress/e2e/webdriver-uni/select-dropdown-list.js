/// <reference types="Cypress" />

describe("Interact with dropdown list via webdriver uni", () => {
    it("Select specific values via select dropdown list", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true});
        cy.get('#dropdowm-menu-1').select('c#').should('have.value', 'c#');
        cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven');
        cy.get('#dropdowm-menu-3').select('css').should('have.value', 'css');
    });

    it("Select specific values via select dropdown list for the second option", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true});
        cy.get('#dropdowm-menu-2').select('maven');
        cy.get('#dropdowm-menu-2').find(':selected').contains('Maven');
        cy.get('#dropdowm-menu-2').select('TestNG');
        cy.get('#dropdowm-menu-2').find(':selected').should('have.value', 'testng');
    });
})