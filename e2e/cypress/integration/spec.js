describe('compras', () => {
  it('comprar livro', () => {

    cy.visit('https://www.amazon.com.br/')
    cy.get('#nav-signin-tooltip > a > span').click()
    cy.get('#ap_email').type('franciscomoral@hotmail.com')
    cy.get('#continue').click()
    cy.get('#ap_password').type('Navarro030303')
    cy.get('#signInSubmit').click()
    cy.get('#twotabsearchtextbox')
    .type('1984 edicao especial').type('{enter}')
    cy.get('a').contains('1984 - Edição especial').click()
    cy.get('#add-to-cart-button', {timeout: 7000}).should('have.length', 1).click()

    cy.get('#nav-cart').click()
    cy.get('#sc-buy-box-ptc-button > span > input').click()
    cy.get('#placeYourOrder > span > input').click()
    //cy.scrollTo('bottom')
    //cy.get('#pp-baNuhP-157').click()

    cy.exec('bash /Users/morlfm/teste/cypress.sh',{timeout: 50000000})




  })
})
