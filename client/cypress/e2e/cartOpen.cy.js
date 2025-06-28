describe('Shopping Cart', () => {
    it('opens the cart when the cart icon is clicked', () => {
      cy.visit('http://localhost:5173'); 
  
      cy.get('[data-testid="cart-panel"]').should('have.class', 'translate-x-full');
  
      // Click the cart icon
      cy.get('[data-testid="cart-button"]').click();
  
      // Now the cart should be visible
      cy.get('[data-testid="cart-panel"]').should('have.class', 'translate-x-0');
    });
  });
  