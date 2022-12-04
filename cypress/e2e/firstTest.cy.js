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
    let categories, ubications, products

    before(() => {

        cy.fixture('listCategories').then(listCategories => {
            categories = listCategories;
        });

        cy.fixture('listUbications').then(listUbications => {
            ubications = listUbications;
        });

        cy.fixture('product').then(product => {
            products = product;
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


    it('Backend testing', () => {
        const random = [Math.floor(Math.random() * (50 - 1 + 1)) + 1]
        cy.request('GET', `https://api.mercadolibre.com/sites/MLA/search?q=${products}`).then(response => {
            expect(response.status).eq(200);
            cy.request('GET', `https://api.mercadolibre.com/items/${response.body.results[random].id}`).then(responseProduct => {
                expect(response.body.results[random].id).eq(responseProduct.body.id);
                expect(response.body.results[random].price).eq(responseProduct.body.price)
                expect(response.body.results[random].title).eq(responseProduct.body.title)
                expect(response.body.results[random].accepts_mercadopago).eq(responseProduct.body.accepts_mercadopago)
                expect(response.body.results[random].currency_id).eq(responseProduct.body.currency_id)
                expect(response.body.results[random].shipping.free_shipping).eq(responseProduct.body.shipping.free_shipping)

            })
        })
    })

});