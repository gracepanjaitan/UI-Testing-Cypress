describe("Leave Management", async function () {
    beforeEach(() => {
      cy.login(); // login dulu sebelum setiap test
    });
    const baseUrl = "https://opensource-demo.orangehrmlive.com/web/index.php";
    const employeeName  = "genggos minul";
    const entitlement = 100;
  
    it("Invalid add Leave", async function () {
      cy.contains("Leave").click();
      cy.url().should("include", "/leave/viewLeaveList");
      cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)', {timeout:5000}).click();
      cy.contains('Add Entitlements').click()
      cy.url().should("include", "/leave/addLeaveEntitlement");
      cy.get('.oxd-autocomplete-text-input > input').type(employeeName);
      cy.contains('.oxd-autocomplete-option', employeeName, {timeout:5000}).click();
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
      cy.contains('CAN - Matternity').click()
      cy.get(':nth-child(2) > .oxd-input').type(entitlement);
      cy.get('[type="submit"]').should("be.visible").click();
      cy.get('.oxd-sheet', {timeout:5000}).should('be.visible')
      cy.get('.orangehrm-modal-footer > .oxd-button--secondary').contains('Confirm').click()
      cy.get('.oxd-toast-content').should('be.visible');
    });
  });
  