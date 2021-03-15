describe('login', () => {
  it('login', () => {

    cy.visit('https://www.amazon.com.br/')
    cy.get('#nav-signin-tooltip > a > span').click()
    cy.get('#ap_email').type('moral@pokemail.net')
    cy.get('#continue').click()
    cy.get('#ap_password').type('teste01234')
    cy.get('#signInSubmit').click()
  })
})
