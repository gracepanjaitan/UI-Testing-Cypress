const { beforeEach } = require("mocha");

describe('UI automation cpress', async function () {
    const baseUrl= 'https://opensource-demo.orangehrmlive.com/web/index.php';
    const empUsername = 'genggos';
    const emPass= 'genggos123';
    const employeeName= "genggos minul";

    beforeEach(function(){
        cy.visit(baseUrl, '/auth/login');
    })

    function longinEmployee() {
        cy.get('.oxd-text--h5').should('be.visible')
        cy.get(`[name="username"]`, {timeout: 3000}).clear().type(empUsername);
        cy.get(`[name="password"]`, {timeout: 3000}).clear().type(emPass);
        cy.get('.oxd-button').click("center").should("be.visible");     
        cy.url().should('include', '/dashboard/index')
    }
    it('Request Leave', async function () {
        // Login as employee
        longinEmployee();
        
        // Request Leave
        cy.contains("Leave", {timeout: 5000}).click();
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(1)').click()
        cy.get('.oxd-select-text', {timeout:3000}).click();
        cy.contains('CAN - Matternity').click()
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().type("2025-20-05");
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().type("2025-25-05");
        cy.get('[type="submit"]').should("be.visible").click();
        cy.get('.oxd-toast-content').should('be.visible');

        //log out
        cy.get('.oxd-userdropdown-tab').click()
        cy.contains('Logout', {timeout: 5000}).click()
        cy.url().should('include', '/auth/login')

        //login as admin again
        cy.login();

        //Approve Leave
        cy.wait(1000);
        cy.contains("Leave").click();
        cy.url().should("include", "/leave/viewLeaveList");
        cy.get('.oxd-autocomplete-text-input > input').type(employeeName);
        cy.wait(1000);
        cy.contains('.oxd-autocomplete-option', employeeName).click();
        cy.get('.oxd-button--secondary').click()
        // cy.get('.oxd-button--label-success', {timeout: 5000}).click();
        // cy.contains('Successfully Updated').should('be.visible')

        //login as employee
        longinEmployee();

        // approved employee
        cy.contains("Leave", {timeout: 5000}).click();
        cy.contains('Scheduled').should('be.visible');
    })

})