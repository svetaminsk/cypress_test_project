/// <reference types="Cypress" />

describe("Upload file via webdriver uni", () => {
    it("Upload a file", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force: true});
        cy.get('#myFile').selectFile('cypress/fixtures/file1.txt');
        cy.get('#submit-button').click();
    })

    it("Upload no file", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force: true});
        cy.get('#submit-button').click();
    })
})