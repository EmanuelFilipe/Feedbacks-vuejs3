const APP_URL = 'http://localhost:8080';
describe('Credentials', () => {
    it('should generate an api_keyp', () => {
        cy.visit(APP_URL)

        cy.get('#header-login-button').click()
        cy.get('#modal-login')
    
        cy.get('#email-field').type('maria@gmail.com')
        cy.get('#password-field').type('123456')
        cy.get('#submit-button').click()

        cy.wait(4000)
        cy.visit(`${APP_URL}/credentials`)
        cy.wait(2000)

        // obtem o valor
        const oldApikey = cy.get('#apikey').invoke('text')
        cy.get('#generate-apikey').click()
        cy.wait(2000)
        const newApikey = cy.get('#apikey').invoke('text')
    
        expect(oldApikey).to.not.equal(newApikey)
    })
})