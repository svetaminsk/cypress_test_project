/// <reference types="Cypress" />

describe("Test Contact Us form via Automation Test Store", () => {
    beforeEach(() => {
        cy.viewport(550, 750);
        cy.visit("https://automationteststore.com/")
    })
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.get("a[href$='contact']").click().then(function(itemContactUs) {
            cy.log("this item is: " + itemContactUs.text())
        })
        cy.get('[name="first_name"]').type("Svetlana");
        cy.get('#ContactUsFrm_email').type("test@test.com");
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
        cy.get('[name="enquiry"]').type("Comment here");
        cy.get('[title="Submit"]').click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!');
    });
})