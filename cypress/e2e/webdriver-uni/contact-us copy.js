/// <reference types="Cypress" />

describe("Test Contact Us form via WebDriverUni", () => {
    before(() => {
        cy.fixture("userDetails").as("user");
    });
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true})
        cy.title().should('include', 'Contact')
        cy.get("@user").then((user) => {
            cy.get('[name="first_name"]').type(user.first_name);
            cy.get('[name="last_name"]').type(user.last_name)
            cy.get('[name="email"]').type(user.email)
        })
        
        cy.get('textarea.feedback-input').type("Comment here")
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true})
        cy.get('[name="first_name"]').type("Ann") 
        cy.get('[name="last_name"]').type("Roe")
        cy.get('textarea.feedback-input').type("Comment here")
        cy.get('[type="submit"]').click()
        cy.get('body').contains('Error: all fields are required')
    });
})
