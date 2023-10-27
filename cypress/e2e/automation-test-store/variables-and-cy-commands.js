/// <reference types="Cypress" />

describe("Verifying variables, cypress commands and jquery commands", () => {
    it("Navigating to specific product pages", () => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Makeup").click();
        cy.get(".maintext").then((headerText) => {
            const header = headerText.text();
            cy.log(header);
            expect(header).is.eq("Makeup");
        })
    });

    it("Validate properties of the Contact Us Page", () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact");
        
        //use cypress commands and chaining
        cy.get("#field_11 > label").should('have.text', "First name:");
        //use JQuery
        cy.get("#field_11 > label").then(text => {
            expect(text.text()).is.eq("First name:");
        })
        //Closures
        cy.get("#ContactUsFrm").then(text => {
            cy.get("#field_11").then(fn => {
                expect(fn.text()).contains("First name:");
            })
        })
    });
})