describe('design-system: Dot component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=dot--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Dot!');
    });
});
