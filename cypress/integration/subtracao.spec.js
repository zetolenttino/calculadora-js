describe('menos', () => {
    it('8-3', () => {
        cy.visit('http://127.0.0.1:5500/index.html')
        cy.contains('Calculadora')
        cy.get('#btn8').click()
        cy.get('#btnMenos').click()
        cy.get('#btn3').click()
        cy.get('.resultado').click()
        cy.get('#visor').should('have.value', '5')
    })

    it('80-20', () => {
        cy.visit('http://127.0.0.1:5500/index.html')
        cy.contains('Calculadora')
        cy.get('#btn8').click()
        cy.get('#btn0').click()
        cy.get('#btnMenos').click()
        cy.get('#btn2').click()
        cy.get('#btn0').click()
        cy.get('.resultado').click()
        cy.get('#visor').should('have.value', '60')
    })
})