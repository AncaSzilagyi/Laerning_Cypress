describe('Alerts tests', () => {

    before('Go to Alerts page', () => {
        cy.visit("https://demoqa.com/"); // Opens the URL
        cy.xpath('//div/h5[contains(text(), "Alerts, Frame & Windows")]').click();
        cy.wait(500);
        cy.xpath("//span[contains(text(), 'Alerts')]").click();
        cy.xpath("//div[@class='main-header']").should('have.text', 'Alerts');
    })

    it('Click and assert', () => {

        cy.xpath("//button[@id='alertButton']").click();
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('You clicked a button');
         })
    })
})

