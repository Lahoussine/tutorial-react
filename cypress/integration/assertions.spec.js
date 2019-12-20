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

  describe('click on primary button', () => {
    it('.should() - click on primary button', () => {
      let delay = 800;
      cy.get('.btn-outline-primary').click();
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
      cy.get('.btn-outline-primary').trigger('mouseenter');
      
  describe('Explicit Assertions', () => {
    // https://on.cypress.io/assertions
    it('expect - make an assertion about a specified subject', () => {
      // We can use Chai's BDD style assertions
      expect(true).to.be.true
      const o = { foo: 'bar' }

      expect(o).to.equal(o)
      expect(o).to.deep.equal({ foo: 'bar' })
      // matching text using regular expression
      expect('FooBar').to.match(/bar$/i)
    })

    it('must fail',()=>{
      expect(false).to.be.true
    })

    it('pass your own callback function to should()', () => {
      // Pass a function to should that can have any number
      // of explicit assertions within it.
      // The ".should(cb)" function will be retried
      // automatically until it passes all your explicit assertions or times out.
      cy.get('.assertions-p')
        .find('p')
        .should(($p) => {
          // https://on.cypress.io/$
          // return an array of texts from all of the p's
          // @ts-ignore TS6133 unused variable
          const texts = $p.map((i, el) => Cypress.$(el).text())

          // jquery map returns jquery object
          // and .get() convert this to simple array
          const paragraphs = texts.get()

          // array should have length of 3
          expect(paragraphs, 'has 3 paragraphs').to.have.length(3)

          // use second argument to expect(...) to provide clear
          // message with each assertion
          expect(paragraphs, 'has expected text in each paragraph').to.deep.eq([
            'Some text from first p',
            'More text from second p',
            'And even more text from third p',
          ])
        })
    })

    it('finds element by class name regex', () => {
      cy.get('.docs-header')
        .find('div')
        // .should(cb) callback function will be retried
        .should(($div) => {
          expect($div).to.have.length(1)

          const className = $div[0].className

    })
  })

})
