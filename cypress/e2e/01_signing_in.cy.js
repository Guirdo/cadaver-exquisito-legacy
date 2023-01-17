describe('Singing in', () => {
  it('should redirect to to home when signing in and then sign out', () => {
    cy.visit('http://localhost:5173/')

    cy.get('.landing__link').click()
    cy.get('.auth__link').click()

    cy.get('[name="email"]').type('cadaver.exquisito@basicmail.host')
    cy.get('[name="password"]').type('CypresS%51')
    cy.get('button[type="submit"]').click()

    cy.get('span.footer__link').click()
  })
})