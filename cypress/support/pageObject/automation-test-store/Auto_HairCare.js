class Auto_HairCare {
    addProducts() {
        globalThis.productName.forEach(element => {
            cy.addProduct(element).then(() => {
                //debugger
            })
        })
    }
}

export default Auto_HairCare;