export class listProducts {
    constructor() {
        this.titleProduct = '.ui-search-item__title'
        this.randomNumber = Math.floor(Math.random() * (55 - 1 + 1)) + 1; //numero entre 1 y 56, cantidad de productos listados por pagina
    }

    validateProductData() {
        cy.get(this.titleProduct).eq(this.randomNumber).invoke('text').then((title) => {
            const titleProduct = title
            cy.get(`:nth-child(${this.randomNumber + 1}) > .ui-search-result__wrapper > .andes-card > .ui-search-result__content-wrapper > .ui-search-result__content-columns > .ui-search-result__content-column--left > .ui-search-item__group--price > .ui-search-price__part-without-link > .ui-search-price > .ui-search-price__second-line > .price-tag > .price-tag-amount > .price-tag-fraction`).invoke('text').then((price) => {
                const productPrice = price
                cy.get(this.titleProduct).eq(this.randomNumber).click();
                cy.get('.ui-pdp-title').should('have.text', titleProduct)
                cy.get('.ui-pdp-price__second-line > .andes-money-amount > .andes-money-amount__fraction').should('have.text', productPrice)
            })
        });
    }
}