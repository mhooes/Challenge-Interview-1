/// <reference types='cypress' />

//POM
import { navBar } from '../support/pages/navBar'
import { subCategories } from '../support/pages/subCategories'
import { selectedCategorie } from '../support/pages/selectedCategorie'


describe('Challenge entrevista tecnica', () => {
    //POM Constants
    const navBarPage = new navBar();
    const subCategoriesPage = new subCategories()
    const selectedCategoriePage = new selectedCategorie()

    //let Fixtures
    let categories

    before(() => {
        cy.visit('');
        cy.fixture('listCategories').then(listCategories => {
            categories = listCategories;
        });

    })

    beforeEach(() => {
       
    });

    it('Validar primer categoria', () => {
        navBarPage.hoverCategories();
        navBarPage.selectCategories(`${categories.categorieOne.principal}`);
        subCategoriesPage.selectSubCategorie(`${categories.categorieOne.subCategories[0]}`);
        selectedCategoriePage.getTitleCategorie(`${categories.categorieOne.principal } ${categories.categorieOne.subCategories[0]}`).should('exist');
        selectedCategoriePage.getQuantityResults().should('exist');       
    })

    it('Validar segunda categoria', () => {
        navBarPage.hoverCategories();
        navBarPage.selectCategories(`${categories.categorieThree.principal}`);
        subCategoriesPage.selectSubCategorie(`${categories.categorieThree.subCategories[0]}`);
        selectedCategoriePage.getTitleCategorie(`${categories.categorieThree.subCategories[0] }`).should('exist');
        selectedCategoriePage.getQuantityResults().should('exist');       
    })


});