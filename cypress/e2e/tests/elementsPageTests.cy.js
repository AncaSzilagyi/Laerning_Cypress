
describe('Check page elements', () => {
    it('Verify title of the page positive', () => {
        cy.visit("https://demoqa.com/");
        cy.title().should('eq', 'ToolsQA');
    })
})

describe('Elements tests', () => {
    it('Text box', () => {
        cy.visit("https://demoqa.com/"); // Opens the URL
        cy.xpath('//div/h5[contains(text(), "Elements")]').click();
        cy.wait(500);
        cy.xpath("//span[contains(text(), 'Text Box')]").click();
        cy.xpath("//input[@id='userName']").type("Elisa Enea");
        cy.xpath("//input[@id='userEmail']").type("sz12anca@gmail.com");
        cy.get("#currentAddress").type("This is the current address.");
        cy.get("#permanentAddress").type("This is my permanent address.");
        cy.get("#submit").click();

        //todo assert that all the tasks appear under the form
        //todo try to input an invalid email
    })

    it('Check Box', () => {
        cy.visit("https://demoqa.com/"); // Opens the URL
        cy.xpath('//div/h5[contains(text(), "Elements")]').click();
        cy.xpath("//span[contains(text(), 'Check Box')]").click();

        cy.xpath("//button[@aria-label='Expand all']").click({ force: true });
        cy.xpath("//span[contains(text(),'Notes')]/../span[1]").click();

        cy.checkbox_class_assert('Notes', 'check');
        cy.checkbox_class_assert('Desktop', 'half-check');
        cy.checkbox_class_assert('Home', 'half-check');

        cy.xpath("//span[contains(text(),'Desktop')]/../span[1]").click();

        cy.checkbox_class_assert('Notes', 'check');
        cy.checkbox_class_assert('Desktop', 'check');
        cy.checkbox_class_assert('Commands', 'check');

        cy.xpath("//span[contains(text(),'Home')]/../span[1]").click();
        cy.xpath("//span[contains(text(),'Home')]/../span[1]").click();

        cy.checkbox_class_assert('Desktop', 'uncheck');
        cy.checkbox_class_assert('Documents', 'uncheck');
        cy.checkbox_class_assert('Downloads', 'uncheck');

    })

    it('Radio button', () => {
        cy.visit("https://demoqa.com/"); // Opens the URL
        cy.xpath('//div/h5[contains(text(), "Elements")]').click();
        cy.xpath("//span[contains(text(), 'Radio Button')]").click();
        cy.xpath("//label[contains(text(),'Yes')]/../input").click({ force: true }).should('be.checked');
    })

    it('Web Tables', () => {
        cy.visit("https://demoqa.com/"); // Opens the URL
        cy
            .xpath('//div/h5[contains(text(), "Elements")]')
            .click();
        cy
            .xpath("//span[contains(text(), 'Web Tables')]")
            .click();

        cy
            .xpath('//button[contains(text(),"Add")]')
            .click();
        cy
            .xpath("//input[@placeholder='First Name']")
            .type('Elisa');
        cy
            .xpath("//input[@placeholder='Last Name']")
            .type('Enea');
        cy
            .xpath("//input[@placeholder='name@example.com']")
            .type('test@gmail.com');
        cy
            .xpath("//input[@placeholder='Age']")
            .type('23');
        cy
            .xpath("//input[@placeholder='Salary']")
            .type('4000');
        cy
            .xpath("//input[@placeholder='Department']")
            .type('testing department');
        cy
            .xpath("//button[@id='submit']")
            .click();

        // to validate here some invalid values or empty fields.

        cy
            .xpath("//input[@placeholder='Type to search']")
            .type('Elisa');
        cy
            .xpath("//div[@class='rt-tr -odd']/div[1]")
            .should('have.text', 'Elisa');
    })


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