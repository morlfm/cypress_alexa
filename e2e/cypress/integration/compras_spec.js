describe('compras', () => {
  it('comprar livro', () => {

    cy.visit('https://www.amazon.com.br/')
    cy.get('#nav-signin-tooltip > a > span').click()
    cy.get('#ap_email').type('xxxx')
    cy.get('#continue').click()
    cy.get('#ap_password').type('xxxx')
    cy.get('#signInSubmit').click()
    cy.get('#twotabsearchtextbox' ,{timeout: 5000}).should('have.length', 1)
    .type('1984').type('{enter}')
    cy.get('a').contains('1984').click()
    cy.get('#add-to-cart-button', {timeout: 7000}).should('have.length', 1).click()
    cy.get('#nav-cart').click()
    cy.get('#sc-buy-box-ptc-button > span > input').click()
    cy.get('#placeYourOrder > span > input').click()
    //script bash cancel by Alexa
    //cy.exec('bash /Users/morlfm/teste/cypress.sh',{timeout: 50000000})
  })
})
