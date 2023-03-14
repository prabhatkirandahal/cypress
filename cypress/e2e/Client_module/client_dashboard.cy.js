describe('Client', ()=>{
    it('Client Dashboard', ()=>{
        cy.visit(Cypress.env('baseUrl'))
        cy.get('[name="username"]').type(Cypress.env('user_name'))
        cy.get('[name="password"]').type(Cypress.env('user_password'))
        cy.get('.btn').click()
        cy.wait(4000)
        cy.get('').click()
        cy.contains('Client Dashboard').click()
    })
})