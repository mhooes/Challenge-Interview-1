export class navBar {

    constructor() {
        this.menuCategs = '//div[@class="nav-menu"]//a[text()="Categorías"]';
        this.navCategs = '.nav-categs'
    }

    hoverCategories() {
        cy.xpath(this.menuCategs).realHover({ force: true });
    };

    selectCategories(categories) {
        cy.get(this.navCategs).find('a').contains(categories).click({ force: true });
    };
}