describe('multiplicacao', () => {
    it('5*5', () => {
        cy.visit('http://127.0.0.1:5500/index.html')
        cy.contains('Calculadora')
        cy.get('#btn5').click()
        cy.get('#btnMultiplicacao').click()
        cy.get('#btn5').click()
        cy.get('.resultado').click()
        cy.get('#visor').should('have.value', '25')
    }) 

    it('8*8', () => {
        cy.visit('http://127.0.0.1:5500/index.html')
        cy.contains('Calculadora')
        cy.get('#btn8').click()
        cy.get('#btnMultiplicacao').click()
        cy.get('#btn8').click()
        cy.get('.resultado').click()
        cy.get('#visor').should('have.value', '64')
    }) 
})