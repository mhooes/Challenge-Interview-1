export class subCategories {

    selectSubCategorie(subCategorie) {
        cy.contains(subCategorie).click();
    };
};