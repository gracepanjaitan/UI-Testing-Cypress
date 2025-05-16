describe("Employee Management", async function () {
  beforeEach(() => {
    cy.login(); // login dulu sebelum setiap test
  });
  const firstName = "Jhon";
  const lastName = "Doe";

  it("Invalid add employee", async function () {
    cy.get(":nth-child(2) > .oxd-main-menu-item").contains("PIM").click()
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList"
    );
    cy.get(".orangehrm-header-container > .oxd-button")
      .contains(" Add ")
      .should("be.visible")
      .click();
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee"
    ).contains("Add Employee");
    cy.get(".oxd-button--secondary").should("be.visible").click();
    cy.get(
      ".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input"
    ).type(firstName);
    cy.get(":nth-child(3) > :nth-child(2) > .oxd-input").type(lastName);
    cy.get('[type="submit"]').should("be.visible").click();
    cy.get('.oxd-toast--error').should('not.exist');
    cy.contains("Personal Details");
    cy.contains(firstName, lastName)

  });
});
