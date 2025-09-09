describe('home page', () => {
  it('passes', () => {
    cy.visit('https://janbalangue.github.io/near-me-app/');
    cy.get('.App').should('be.visible');
    cy.get('.appTitle').contains('Near Me App');
    cy.get('.App').contains('Find your next favorite place.');
    cy.get('.App').contains('Search');
    cy.get('.navbar').should('be.visible');
    cy.get('.navbar').contains('Home');
    cy.get('.navbar').contains('About');
    cy.get('.site-footer').should('be.visible');
    cy.get('.site-footer').contains('Links');
    cy.get('.site-footer').contains('Home');
    cy.get('.site-footer').contains('About');
  });
});
