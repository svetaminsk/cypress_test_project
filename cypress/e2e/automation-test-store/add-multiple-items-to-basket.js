import Auto_HomePage from "../../support/pageObject/automation-test-store/Auto_HomePage";
import Auto_HairCare from "../../support/pageObject/automation-test-store/Auto_HairCare";
/// <reference types="Cypress" />

describe("Add multiple items to basket", () => {
    const homePage = new Auto_HomePage();
    const hairCare = new Auto_HairCare();

    before(() => {
        cy.fixture("product").then((data) => {
            globalThis = data;
        })
    })
    beforeEach(() => {
        homePage.visitHomepage();
        homePage.click_HairCare();
    })
    it("Add specific items to basket", () => {  
        hairCare.addProducts();
    });
})