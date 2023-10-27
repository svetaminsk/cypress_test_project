/// <reference types="Cypress" />

describe("Test date picker via webdriver_uni", () => {
    it("Select date from date picker", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#datepicker').invoke('removeAttr', 'target').click({force: true});
        cy.get('#datepicker').click();

        let date = new Date();
        date.setDate(date.getDate() + 360);
        let futureYear = date.getFullYear();
        let futureMonth = date.toLocaleString("defalt", {month: "long"});
        let futureDay = date.getDate();

        function selectMonthAndYear() {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then((currentDate) => {
                if(!currentDate.text().includes(futureYear)) {
                    cy.get('.next').first().click();
                    selectMonthAndYear();
                }
            }).then(() => {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then((currentDate) => {
                if(!currentDate.text().includes(futureMonth)) {
                    cy.get('.next').first().click();
                    selectMonthAndYear();
                }
            })
        })
        }

        function selectDay() {
            cy.get('[class="day"]').contains(futureDay).click();
        }

        selectMonthAndYear();
        selectDay();
    });
})