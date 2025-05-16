describe("Employee Management", async function () {
  beforeEach(() => {
    cy.login(); // login dulu sebelum setiap test
  });

  it("Invalid add employee", async function () {
    cy.get(":nth-child(2) > .oxd-main-menu-item").contains("PIM").click();
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList"
    );
    cy.get(".orangehrm-header-container > .oxd-button").contains(" Add ").click();
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee"
    ).contains("Add Employee");
    cy.get(".oxd-button--secondary").should("be.visible").click("center");
    cy.get(".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input")
      .contains("Required")
      .should("have.css", "border-color")
      .and("eq", "rgb(235, 9, 16)");
    cy.get(":nth-child(3) > :nth-child(2) > .oxd-input")
      .contains("Required")
      .should("have.css", "border-color")
      .and("eq", "rgb(235, 9, 16)");
  });
});
