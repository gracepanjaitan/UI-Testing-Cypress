describe("Leave Management", async function () {
    beforeEach(() => {
      cy.login(); // login dulu sebelum setiap test
    });
    const baseUrl = "https://opensource-demo.orangehrmlive.com/web/index.php";
    const employeeName = "Ranga Akunuri"
    const username = "abcd123"
    const password = "abcd123" 
    const conPass = "abcd123"
  
    it("Invalid add Leave", async function () {
      cy.contains("Admin").click();
      cy.get('.orangehrm-header-container > .oxd-button').click()
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
      cy.contains('ESS').click()
      cy.get('.oxd-autocomplete-text-input > input').type(employeeName);
      cy.contains('.oxd-autocomplete-option', employeeName).click();
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
      cy.contains('Enabled').click()
      cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)
      cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type(password);
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(conPass);
      cy.get('.oxd-button--secondary').click()
    });
  });
  