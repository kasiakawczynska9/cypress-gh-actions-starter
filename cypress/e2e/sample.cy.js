describe('Example Cypress smoke tests', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io');
  });

  it('loads the homepage and checks the title', () => {
    cy.title().should('include', 'Cypress');
    cy.get('h1').should('contain.text', 'Kitchen Sink');
  });

  it('navigates to the Commands page', () => {
    cy.contains('Commands').click();
    cy.url().should('include', '/commands');
    cy.contains('Querying').should('be.visible');
  });

  it('verifies that the Buttons link is visible', () => {
    cy.contains('Buttons').should('be.visible');
  });

  it.skip('skips this test for demonstration', () => {
    cy.log('This test is skipped intentionally.');
  });

  it('logs custom info and asserts body content', () => {
    cy.log('Custom info: verifying content presence');
    cy.get('body').should('contain.text', 'Kitchen Sink');
  });

  it('multiple assertions on the hero heading', () => {
    cy.get('h1')
      .should('be.visible')
      .and('contain.text', 'Kitchen Sink');
  });
});
//changed