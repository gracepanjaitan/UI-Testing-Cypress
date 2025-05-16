const { beforeEach } = require("mocha");

describe('UI automation cpress', async function () {
    const baseUrl= 'https://opensource-demo.orangehrmlive.com/web/index.php';

    beforeEach(function(){
        cy.visit(baseUrl, '/auth/login');
    })
    it('login invalid', async function () {
        cy.get('.oxd-text--h5').should('be.visible')
        cy.get('.oxd-button').click("center").should("be.visible");
        cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('contain', 'Required');
        cy.get(`[name="username"]`).should('have.css', 'border-color').and('eq', 'rgb(235, 9, 16)');
        cy.get(`[name="password"]`).should('have.css', 'border-color').and('eq', 'rgb(235, 9, 16)');
    })
})