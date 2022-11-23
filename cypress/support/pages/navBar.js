export class navBar {

    constructor() {
        this.menuCategs = '.nav-menu-categories-link';
        this.navCategs = '.nav-categs'
    }

    hoverCategories() {
       cy.get( this.menuCategs).realHover();
    };

    selectCategories(categories) {
        cy.get(this.navCategs).find('a').contains(categories).click({ force: true });
    };
}