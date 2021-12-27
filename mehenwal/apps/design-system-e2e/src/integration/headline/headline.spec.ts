describe('design-system: Headline component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=headline--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Headline!');
    });
});
