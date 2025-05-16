describe("Leave Management", async function () {
  beforeEach(() => {
    cy.login(); // login dulu sebelum setiap test
  });
  const firstName = "Jhon";
  const lastName = "Doe";
  const baseUrl = "https://opensource-demo.orangehrmlive.com/web/index.php";

  it("Valid add Leave", async function () {
    cy.contains("Leave").click();
    cy.url().should("include", "/leave/viewLeaveList");
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click();
    cy.get('.oxd-dropdown-menu').contains('Add Entitlements').click()
    cy.get('[type="submit"]').should("be.visible").click();
    cy.url().should("include", "/leave/addLeaveEntitlement");
    cy.contains('Required')
  });
});
