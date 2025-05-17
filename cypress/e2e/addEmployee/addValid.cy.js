describe("Employee Management", async function () {
  beforeEach(() => {
    cy.login(); // login dulu sebelum setiap test
  });
  const firstName = "genggos";
  const lastName = "minul";

  it("Invalid add employee", async function () {
    cy.contains("PIM").click()
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList");
    cy.contains(" Add ").should("be.visible").click();
    cy.get( ".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input").type(firstName);
    cy.get(":nth-child(3) > :nth-child(2) > .oxd-input").type(lastName);
    cy.get('[type="submit"]').should("be.visible").click();
    cy.get('.oxd-toast--error').should('not.exist');
    cy.contains("Personal Details");

  });
});
