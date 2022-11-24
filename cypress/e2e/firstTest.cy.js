/// <reference types='cypress' />

//POM
import { navBar } from '../support/pages/navBar'
import { subCategories } from '../support/pages/subCategories'
import { selectedCategorie } from '../support/pages/selectedCategorie'
import { listProducts } from '../support/pages/listProducts'

describe('Challenge entrevista tecnica', () => {
    //POM Constants
    const navBarPage = new navBar();
    const subCategoriesPage = new subCategories()
    const selectedCategoriePage = new selectedCategorie()
    const listProductsPage = new listProducts()

    //let Fixtures
    let categories,ubications

    before(() => {

        cy.fixture('listCategories').then(listCategories => {
            categories = listCategories;
        });

        cy.fixture('listUbications').then(listUbications => {
            ubications = listUbications;
        });
    })

    beforeEach(() => {
        cy.visit('');
    });

    it('Validar primer categoria', () => {
        navBarPage.hoverCategories();
        navBarPage.selectCategories(`${categories.categorieOne.principal}`);
        subCategoriesPage.selectSubCategorie(`${categories.categorieOne.subCategories[0]}`);
        selectedCategoriePage.getTitleCategorie(`${categories.categorieOne.principal} ${categories.categorieOne.subCategories[0]}`).should('exist');
        selectedCategoriePage.getQuantityResults().should('exist');
    })

    it('Validar segunda categoria', () => {
        navBarPage.hoverCategories();
        navBarPage.selectCategories(`${categories.categorieThree.principal}`);
        subCategoriesPage.selectSubCategorie(`${categories.categorieThree.subCategories[0]}`);
        selectedCategoriePage.getTitleCategorie(`${categories.categorieThree.subCategories[0]}`).should('exist');
        selectedCategoriePage.getQuantityResults().should('exist');
    })

    it.only('Validar datos de publicacion de Tercera categoria', () => {
        navBarPage.hoverCategories();
        navBarPage.selectCategories(`${categories.categorieFive.principal}`);
        subCategoriesPage.selectSubCategorie(`${categories.categorieFive.subCategories[0]}`);
        selectedCategoriePage.getTitleCategorie(`${categories.categorieFive.subCategories[0]}`).should('exist');
        selectedCategoriePage.getQuantityResults().should('exist');
        selectedCategoriePage.selectUbication(ubications);
        listProductsPage.validateProductData()
    })

});