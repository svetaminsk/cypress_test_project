/// <reference types="Cypress" />

describe("Handle JS alerts", () => {
    it("Confirm js alert contains the correct text", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true});

        cy.get('#button1').click();
        cy.on('window:alert', (str) => {
            expect(str).to.be.equal('I am an alert box!')
        })
    });

    it("Validate js alert box works correctly when clicking OK", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true});

        cy.get('#button4').click();
        cy.on('window:alert', (str) => {
            return true;
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!');
    });

    it("Validate js alert box works correctly when clicking Cancel", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true});

        cy.get('#button4').click();
        cy.on('window:confirm', (str) => {
            return false;
        })
        cy.get('#confirm-alert-text').contains('Cancel');
    });

    it("Validate js alert box works correctly using stub", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true});

        const stub = cy.stub;
        cy.on('window:confirm', stub);
        cy.get('#button4').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        });
    });
})