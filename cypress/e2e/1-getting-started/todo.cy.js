describe('Teste de login', () => {
  it('register', () => {
      cy.visit('https://practice.expandtesting.com/login');

      cy.get('#username').type('practice');
      cy.get('#password').type('SuperSecretPassword!');
      cy.get('button.btn.btn-bg.btn-primary.d-block.w-100').click();
  });
  
});