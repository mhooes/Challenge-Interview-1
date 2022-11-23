export class selectedCategorie {

constructor() {
    this.titleCategorie = '.ui-search-breadcrumb__title';
    this.quantityResults = '.ui-search-search-result';
}

    getTitleCategorie(categorie) {
       return  cy.contains(this.titleCategorie, categorie, { matchCase: false });
    };

    getQuantityResults() {
       return cy.get( this.quantityResults);
    };
}