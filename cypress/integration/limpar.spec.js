describe('limpar', () => { // lambda ou arrow function
    it('3+1 AC 14+5', () => {
        cy.visit('http://127.0.0.1:5500/index.html')
        cy.contains('Calculadora')
        cy.get('#btn3').click()
        cy.get('#btnSoma').click()
        cy.get('#btn1').click()
        cy.get('.resultado').click()
        cy.get('#visor').should('have.value', '4')

        cy.get('#btnAC').click()

        cy.get('#btn1').click()
        cy.get('#btn4').click()
        cy.get('#btnSoma').click()
        cy.get('#btn5').click()
        cy.get('.resultado').click()
        cy.get('#visor').should('have.value', '19')
    })
})