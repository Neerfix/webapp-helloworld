describe('Check Home Page content', function() {
	beforeEach(() => {
		cy.visit(Cypress.env('baseUrl'))
	})
	
	it('Travels Map', () => {
		cy.get('#bloc-map .title-centered h2').contains("Carte des voyages")
	})
	
	it('Popular Travels', () => {
		cy.get('#bloc-popular .title-container h2').contains("Destinations populaires")
		cy.get('#bloc-map .title-centered h2').contains("Carte des voyages")
		
		cy.get('#bloc-popular .container .grid a').should('have.length', 3)
	})
})