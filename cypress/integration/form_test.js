describe('finding name and changing it', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000/users')
        cy.url().should('include', 'localhost')
    })

    it('find name and put new text', () => {
        cy.get('input[name="name"]')
        .type('tiffany')
        .should('have.value', 'tiffany')
    })
})

describe('finding email and changing it', () => {
    it('can find email and type new email', () =>{
        cy.get('input[name="email"]')
        .type('tiffany@email.com')
        .should('have.value', 'tiffany@email.com')
    })
})

describe('find password and change it', () => {
    it('find password and change text', () => {
        cy.get('input[name="password"]')
        .type('password')
        .should('have.value', 'password')
    })
})

describe('check the terms of service box', () => {
    it('find the box and check it', () => {
        cy.get('input[name="accept"]').click()
    })
})

describe('check if submit is functinal', () => {
    it('find submit and click it', () => {
        cy.get('.submitButton').click()
    })
})

describe('check validation to see if any inputs are empty', () => {
    it('find inputs and verify they are not empty', () => {
        cy.get('input[name="name"]').should('have.value', 'tiffany')
        cy.get('input[name="email"]').should('have.value', 'tiffany@email.com')
        cy.get('input[name="password"]').should('have.value', 'password')
        cy.get('input[name="accept"]').should('be', 'clicked')
    })
})