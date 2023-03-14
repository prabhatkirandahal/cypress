describe('Login', () => {
  it('Empty textfield', () => {
    cy.visit(Cypress.env('baseUrl'))
    //   cy.login(,' ').wait(5000)
    // })
    // it('Wrong Credentials',()=>{
    //   cy.login().wait(5000)
    // })
    // it('Success',()=>{
    cy.get('.img-fluid').screenshot('img-fluid')
    // cy.compareSnapshot('img-fluid', '.img-fluid')
    cy.contains('Enter Username')
    cy.get('[name="username"]').type(Cypress.env('user_name'))
    cy.contains('Password')
    cy.get('[name="password"]').type(Cypress.env('user_password'))
    cy.get('.btn').click().wait(6000)
    cy.contains('Welcome PRABHAT')
    // cy.get('[name="username"]').type((Cypress.env(user_name)))
    // cy.get('[name="password"]').type((Cypress.env(user_password)))
  })
})