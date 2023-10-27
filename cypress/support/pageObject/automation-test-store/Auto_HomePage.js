class Auto_HomePage {
    visitHomepage() {
        cy.visit("https://automationteststore.com/");
    }

    click_HairCare() {
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    }
}

export default Auto_HomePage;