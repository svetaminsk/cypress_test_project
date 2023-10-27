/// <reference types="Cypress" />

describe("Alias and Invoke test", () => {
    it("Validate a specific hair care product", () => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
        cy.get(".fixed_wrapper").eq(0).invoke('text').as('product');
        cy.get('@product').its('length').should('be.gt', 5);
    });

    it("Validate a specific number of products", () => {
        cy.visit("https://automationteststore.com/");
        cy.get(".thumbnail").its('length').should('eq', 16);
        cy.get(".productcart").invoke('attr', 'title').should('equal', 'Add to Cart');
    });

    it.only("Calculate total of normal and sale products", () => {
        cy.visit("https://automationteststore.com/");
        cy.get(".thumbnail").as("product");
        cy.get('@product').find('.oneprice').invoke('text').as('productPrice');
        cy.get('@product').find('.pricenew').invoke('text').as('saleProductPrice');
        let totalSum = 0;
        cy.get('@productPrice').then($linkText => {
            let productPriceArray = $linkText.split('$');
            let sum = 0;
            for (let i = 0; i < productPriceArray.length; i++) {
                sum += Number(productPriceArray[i]);
            }
            totalSum += sum;
        })
        cy.get('@saleProductPrice').then($linkText => {
            let productSalePriceArray = $linkText.split('$');
            let saleSum = 0;
            for (let i = 0; i < productSalePriceArray.length; i++) {
                saleSum += Number(productSalePriceArray[i]);
            }
            totalSum += saleSum;
        })
        .then(() => {
            expect(totalSum).to.equal(660.5);
        })
    });
})
