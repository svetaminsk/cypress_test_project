class HomePage {
    visitHomepage() {
        cy.visit(Cypress.env("webdriveruni_website"), { timeout: 60000 });
    }

    click_ContactUs() {
        cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    }
}

export default HomePage;