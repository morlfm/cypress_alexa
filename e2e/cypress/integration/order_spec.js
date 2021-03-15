describe('order', () => {
  it('order a book', () => {

    cy.visit('https://www.amazon.com.br/')
    cy.get('#nav-signin-tooltip > a > span').click()
    cy.get('#ap_email').type('moral@pokemail.net')
    cy.get('#continue').click()
    cy.get('#ap_password').type('teste01234')
    cy.get('#signInSubmit').click()
    cy.get('#twotabsearchtextbox')
    .type('1984').type('{enter}')
    cy.get('a').contains('1984').click()
    cy.get('#add-to-cart-button', {timeout: 7000}).should('have.length', 1).click()
    cy.get('#nav-cart').click()
    cy.get('#sc-buy-box-ptc-button > span > input').click()
    cy.get('#placeYourOrder > span > input').click()
  })
})
