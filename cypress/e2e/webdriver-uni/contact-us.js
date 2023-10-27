import ContactUs from "../../support/pageObject/webdriver-uni/ContactUs";
import HomePage from "../../support/pageObject/webdriver-uni/HomePage";
/// <reference types="Cypress" />

describe("Test Contact Us form via WebDriverUni", () => {
    Cypress.config('defaultCommandTimeout', 20000);
    const homePage = new HomePage();
    const contactUs_submit = new ContactUs();
    before(() => {
        cy.fixture('example').then((data) => {
            globalThis = data;
        });
    })

    beforeEach(() => {       
        homePage.visitHomepage();
        homePage.click_ContactUs();
    })

    it("Should be able to submit a successful submission via contact us form", () => {      
        cy.title().should('include', 'Contact')
        contactUs_submit.contactForm_submission("Anna", "Rogers", "test@test.com", "Text here");
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        contactUs_submit.contactForm_submission("Anna", "Rogers", " ", "Text here");
    });
})
