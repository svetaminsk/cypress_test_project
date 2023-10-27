/// <reference types="Cypress" />

describe("Iterate over elements", () => {
    beforeEach(() => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    })
    it("Log information of all hair care products", () => {  
        cy
            .get(".fixed_wrapper")
            .each(($el, index, $list) => {
                cy.log($el.text());
            });
    });

    it("Add specific product to the basket", () => {
        cy.selectProduct("Curls to straight Shampoo");
    });

    it("Add another specific product to the basket", () => {
        cy.selectProduct("Seaweed Conditioner");
    });

    it("Add second specific product to the basket", () => {
        cy.selectProduct("Eau Parfumee au The Vert Shampoo");
    });
})