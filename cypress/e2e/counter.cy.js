describe('Counter Component', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('should display initial count of 0', () => {
		cy.get('[data-cy="result"]')
			.should('be.visible')
			.and('contain', 'result: 0')
	})

	it('should increment the count when the button is clicked', () => {
		cy.get('[data-cy="add-btn"]').click()

		cy.get('[data-cy="result"]')
			.should('contain', 'result: 1')
	})

	it('should increment multiple times', () => {
		cy.get('[data-cy="add-btn"]').click().click()

		cy.get('[data-cy="result"]')
			.should('contain', 'result: 2')
	})
})