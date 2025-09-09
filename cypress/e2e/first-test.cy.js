describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://janbalangue.github.io/near-me-app/')
    cy.get('.appTitle').contains('Near Me App')
  })
})