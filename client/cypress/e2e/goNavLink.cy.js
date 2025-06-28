describe('Authors link navigation', () => {
    it('should navigate to /authors when the link is clicked', () => {
      cy.visit('/');
  
      cy.get('[data-testid="authors-link"]')
        .should('be.visible')
        .click();
  
      cy.url().should('include', '/authors');
  
      cy.contains('Authors').should('exist');
    });
  });
  