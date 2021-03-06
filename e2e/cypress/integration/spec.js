describe('compras',() => {
  it('login',() =>{

    cy.visit('https://www.amazon.com.br/')
    cy.get('#nav-signin-tooltip > a > span').click()
    cy.get('#ap_email').type('franciscomoral@hotmail.com')
    cy.get('#continue').click()
    cy.get('#ap_password').type('Navarro030303')
    cy.get('#signInSubmit').click()
    })

    it('choose item',() =>{
    cy.get('#twotabsearchtextbox')
    .type('1984').type('{enter}')
    cy.get('a').contains('1984').click()
    })

    it('add cart',() =>{
    cy.get('#add-to-cart-button', {timeout: 7000}).should('have.length', 1).click()
    cy.get('#nav-cart').click()
    })

    it('place order',() =>{
    cy.get('#sc-buy-box-ptc-button > span > input').click()
    cy.get('#placeYourOrder > span > input').click()
    //cy.scrollTo('bottom')
    //cy.get('#pp-baNuhP-157').click()
    })
    // cancel order on Alexa
    //it('Alexa cancel order',() =>{
    //cy.exec('bash /Users/morlfm/teste/cypress.sh',{timeout: 50000000})
    //})
})
