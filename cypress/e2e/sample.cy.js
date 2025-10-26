// Simple test @smoke

describe("Example Cypress smoke tests", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io");
  });

  it("loads the homepage and checks the title", () => {
    cy.title().should("include", "Cypress");
  });

  it("navigates to the Commands page", () => {
    cy.contains("Commands").click();
    cy.url().should("include", "/commands");
  });

  it("verifies that buttons are visible", () => {
    cy.contains("Buttons").should("be.visible");
  });

  it("fails intentionally to test report output", () => {
    cy.get("non-existent-selector", { timeout: 1000 }).should("exist");
  });

  it("skips this test for demonstration", () => {
    cy.log("This test is skipped intentionally.");
  }).skip();

  it("logs custom info and assertions", () => {
    cy.log("Custom info: verifying content presence");
    cy.get("body").should("contain.text", "Kitchen Sink");
  });

  it("uses multiple assertions on the same element", () => {
    cy.get("h1").should("be.visible").and("contain.text", "Kitchen Sink");
  });
});
