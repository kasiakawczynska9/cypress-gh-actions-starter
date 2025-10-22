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
// touch 2
// touch 3
// touch 5
// touch 6
// touch report build
// touch pages env
