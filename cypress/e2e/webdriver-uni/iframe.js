/// <reference types="Cypress" />

describe("Handling iFrame and Modals", () => {
    it("Handle webdriver uni iFrame and Modals", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#iframe').invoke('removeAttr', 'target').click({force: true});
        cy.get('#frame').then($iframe => {
            const body = $iframe.contents().find('body');
            cy.wrap(body).as('iframe');
        })
        cy.get('@iframe').find('#button-find-out-more').click();
        cy.get('@iframe').find('#myModal').as('modal')
        cy.get('@modal').contains('Close').click();
    });
})