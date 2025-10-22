// Simple test @smoke

describe("Example Cypress E2E", () => {
  it("basic navigation @smoke", () => {
    cy.visit("https://example.cypress.io");
    cy.contains("type").click();
    cy.url().should("include", "/commands/actions");
  });

  it("additional non-smoke check", () => {
    cy.visit("https://example.cypress.io");
    cy.contains("contains").should("exist");
  });
});
// touch
