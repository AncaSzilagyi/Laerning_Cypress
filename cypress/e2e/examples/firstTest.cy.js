
// describe('Check page elements', () => {
//     it('Verify title of the page positive', () => {
//         cy.visit("https://demoqa.com/");
//         cy.title().should('eq', 'ToolsQA');
//     })
// })

describe('Elements tests', () => {
    // it('Text box - complete form', () => {
    //     cy.visit("https://demoqa.com/"); // Opens the URL
    //     cy.xpath('//div/h5[contains(text(), "Elements")]').click();
    //     cy.wait(500);
    //     cy.xpath("//span[contains(text(), 'Text Box')]").click();
    //     cy.xpath("//input[@id='userName']").type("Elisa Enea");
    //     cy.xpath("//input[@id='userEmail']").type("sz12anca@gmail.com");
    //     cy.get("#currentAddress").type("This is the current address.");
    //     cy.get("#permanentAddress").type("This is my permanent address.");
    //     cy.get("#submit").click();
    // })

    // //todo assert that all the tasks appear under the form
    // //todo try to input an invalid email

    // it('Radio button', () => {
    //     cy.visit("https://demoqa.com/"); // Opens the URL
    //     cy.xpath('//div/h5[contains(text(), "Elements")]').click();
    //     cy.xpath("//span[contains(text(), 'Radio Button')]").click();
    //     cy.xpath("//label[contains(text(),'Yes')]/../input").click({force:true}).should('be.checked');
    // })

    // it('Buttons', () => {
    //     cy.visit("https://demoqa.com/"); // Opens the URL
    //     cy.xpath('//div/h5[contains(text(), "Elements")]').click();
    //     cy.xpath("//span[contains(text(), 'Buttons')]").click();
    //     cy.xpath("//button[@id='doubleClickBtn']").dblclick();
    //     cy.xpath("//button[@id='rightClickBtn']").rightclick();
    //     cy.xpath("//button[text()='Click Me']").click();

    //     // var paras = cy.xpath('//p[contains(text(), "You have done")]');
    //     cy.get('#doubleClickMessage').should('contain.text', 'You have done a double click');
    //     cy.get('#rightClickMessage').should('contain.text', 'You have done a right click');
    //     cy.get('#dynamicClickMessage').should('contain.text', 'You have done a dynamic click');
    // })

    it('Buttons', () => {
        cy.visit("https://demoqa.com/"); // Opens the URL
        cy.xpath('//div/h5[contains(text(), "Elements")]').click();
        cy.xpath("//span[contains(text(), 'Buttons')]").click();
        cy.xpath("//button[@id='doubleClickBtn']").dblclick();
        cy.xpath("//button[@id='rightClickBtn']").rightclick();
        cy.xpath("//button[text()='Click Me']").click();

        // var paras = cy.xpath('//p[contains(text(), "You have done")]');
        cy.get('#doubleClickMessage').should('contain.text', 'You have done a double click');
        cy.get('#rightClickMessage').should('contain.text', 'You have done a right click');
        cy.get('#dynamicClickMessage').should('contain.text', 'You have done a dynamic click');
    })




})