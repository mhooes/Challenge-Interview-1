export class listProducts {
    constructor() {
        this.titleProduct = '.ui-search-item__title'
    }

    getRandomProduct() {
        const randomNumber = Math.floor(Math.random() * (55 - 1 + 1)) + 1; //numero entre 1 y 56, cantidad de productos listados por pagina
        cy.get(this.titleProduct).eq(randomNumber).click()
    }


}