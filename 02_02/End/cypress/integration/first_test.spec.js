describe('Heading text', () => {
    it('contains the correct title', () => {
        cy.visit('http://localhost:3000/example-1');

        cy.contains('h1', 'My Awesome Web Application')
    });
});