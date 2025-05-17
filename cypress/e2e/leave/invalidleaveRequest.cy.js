const { beforeEach } = require("mocha");

describe('UI automation cpress', async function () {
    const baseUrl= 'https://opensource-demo.orangehrmlive.com/web/index.php';
    const empUsername = 'genggos';
    const emPass= 'genggos123';

    beforeEach(function(){
        cy.visit(baseUrl, '/auth/login');
    })
    it('login valid', async function () {
        cy.get('.oxd-text--h5').should('be.visible')
        cy.get(`[name="username"]`).type(empUsername);
        cy.get(`[name="password"]`).type(emPass);
        cy.get('.oxd-button').click("center").should("be.visible");     
        cy.url().should('include', '/dashboard/index')
        cy.contains("Leave").click();
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(1)').click()
        cy.get('[type="submit"]').should("be.visible").click();
        cy.get('.oxd-grid-2 > :nth-child(1) > .oxd-input-group > .oxd-text')
        .contains('Required')
        .should('be.visible')
        cy.get('.oxd-grid-4 > :nth-child(1) > .oxd-input-group > .oxd-text')
        .contains('Required')
        .should('be.visible')
        cy.get(':nth-child(2) > .oxd-input-group > .oxd-text')
        .contains('Required')
        .should('be.visible')
    })
})