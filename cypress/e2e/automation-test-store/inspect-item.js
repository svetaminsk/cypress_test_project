/// <reference types="Cypress" />

describe("Inspect automation test store items using chain of commands", () => {
    it("Click on the first item using item header", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click();
    });
    it("Click on the first item using item text", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.prdocutname').contains('Skinsheen').click();
    });
    it("Click on the first item using index", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.fixed_wrapper').find('.prdocutname').eq(1).click();
    });
})