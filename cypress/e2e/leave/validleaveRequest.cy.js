const { beforeEach } = require("mocha");

describe('UI automation cpress', async function () {
    const baseUrl= 'https://opensource-demo.orangehrmlive.com/web/index.php';
    const empUsername = 'genggos';
    const emPass= 'genggos123';
    const employeeName= "genggos minul";

    beforeEach(function(){
        cy.visit(baseUrl, '/auth/login');
    })
    it('Request Leave', async function () {
        //Login as employee
        cy.get('.oxd-text--h5').should('be.visible')
        cy.get(`[name="username"]`).type(empUsername);
        cy.get(`[name="password"]`).type(emPass);
        cy.get('.oxd-button').click("center").should("be.visible");     
        cy.url().should('include', '/dashboard/index')
        cy.contains("Leave", {timeout: 5000}).click();

        // Request Leave
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(1)').click()
        cy.get('.oxd-select-text', {timeout:3000}).click();
        cy.contains('CAN - Matternity').click()
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().type("2025-20-05");
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().type("2025-25-05");
        cy.get('[type="submit"]').should("be.visible").click();
        cy.get('.oxd-toast-content').should('be.visible');

        //log out
        cy.get('.oxd-userdropdown-tab').click()
        cy.contains('Logout').click()
        cy.url().should('include', '/auth/login')

        //login as admin again
        cy.login();

        //Approve Leave
        cy.contains("Leave").click();
        cy.url().should("include", "/leave/viewLeaveList");
        cy.get('.oxd-autocomplete-text-input > input').type(employeeName);
        cy.contains('.oxd-autocomplete-option', employeeName, {timeout:5000}).click();
        cy.get('.oxd-button--secondary').click()
        cy.get('.oxd-table-row > :nth-child(3) > div').should('contain', employeeName);
        cy.get(':nth-child(7) > div').should('contain', "Pendding Approva")
        //
    })

})