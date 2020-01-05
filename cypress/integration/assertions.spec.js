/// <reference types="Cypress" />

context('Assertions', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    cy.visit('http://localhost:3000')
  })

  describe('Cypress', () => {

it('fill the form',()=>{
  cy.contains("Old Form To Split").click();
  cy.wait(2000);
  cy.get('input[name="name"]').clear().type("TEST");
  cy.wait(1500);
})
    it('.should() - click on primary button', () => {
      let delay = 800;
      cy.get('.btn-outline-primary').first().click();
      cy.wait(delay);
      cy.get('.btn-outline-secondary').click();
      
      //cy.get('.btn-outline-primary').trigger('mouseover');
      cy.get('.btn-outline-success').click();
      cy.wait(delay);
      cy.get('.btn-outline-warning').click();
      cy.wait(delay);
      cy.get('.btn-outline-danger').click();
      cy.wait(delay);
      cy.get('.btn-outline-info').click();
      cy.wait(delay);
      cy.get('.btn-outline-light').click();
      cy.wait(delay);
      cy.get('.btn-outline-dark').click();
      cy.wait(delay);
    });
  })
});