/// <reference types="Cypress" />

describe("Handling data via webdriveruni", () => {
    beforeEach(() => {
      cy.visit("http://webdriveruniversity.com/");
      cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    })
    it("calculate the total age of all users", () => {
        let userDetails = [];
        let sum = 0;
        cy.get('#thumbnail-1 td').each(($el, index, $list) => {
            userDetails[index] = $el.text();
      }).then(() => {
        for(let i = 2; i < userDetails.length; i += 3) {
            sum += Number(userDetails[i]);
        }
      }).then(() => {
        expect(sum).to.be.equal(322);
      })
    });

    it("calculate and assert the age of a given user based on last name", () => {
      cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list) => {
        const text = $el.text();
        if(text.includes("Woods")) {
          cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then((age) => {
            const userAge = age.text();
            expect(userAge).to.equal('80');
          })
        }
      })
    })
})