const { beforeEach } = require("mocha");

describe('UI automation cpress', async function () {
    const baseUrl= 'https://opensource-demo.orangehrmlive.com/web/index.php';

    beforeEach(function(){
        cy.visit(baseUrl, '/auth/login');
    })
    it('login valid', async function () {
        cy.get('.oxd-text--h5').should('be.visible')
        cy.get(`[name="username"]`).type('Admin');
        cy.get(`[name="password"]`).type('admin123');
        cy.get('.oxd-button').click("center").should("be.visible");     
        cy.url().should('include', '/dashboard/index')
    })
    

})