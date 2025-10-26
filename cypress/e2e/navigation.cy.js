describe('Kitchen Sink navigation', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io');
  });

  it('opens Type page from Actions section', () => {
    cy.contains('Commands').click();
    cy.contains('Actions').click();
    cy.url().should('include', '/commands/actions');
    cy.get('h1').should('contain', 'Actions');
  });

  it('searches for text on the page', () => {
    cy.get('body').should('contain.text', 'Cypress');
  });

  it('has a visible footer', () => {
    cy.get('footer').should('be.visible');
  });
});
//changed 2