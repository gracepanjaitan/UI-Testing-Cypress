describe("Account Management", async function () {
    beforeEach(() => {
      cy.login(); // login dulu sebelum setiap test
    });
    const baseUrl = "https://opensource-demo.orangehrmlive.com/web/index.php";
  
    it("Invalid add acc", async function () {
      cy.contains("Admin").click();
      cy.get('.orangehrm-header-container > .oxd-button').click()
      cy.get('.oxd-button--secondary').click()
      cy.contains('Required'); 
      for (let i=1; i<=4; i++){
        cy.get(`:nth-child(${i}) > .oxd-input-group > .oxd-text`)
        .contains('Required')
        .should('be.visible')
      }
    });
  });
  