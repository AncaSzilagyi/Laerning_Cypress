// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('checkbox_class_assert', (label_name, status) => {
    var xpath_name = "//span[contains(text(),'" + label_name + "')]/../span[1]/*[local-name()='svg']";
    var class_name = 'rct-icon rct-icon-' + status;
    cy.xpath(xpath_name).should('have.class', class_name);
})

// Cypress.Commands.add('check_table_field_value', (field_column_no, value) => {
//     var xpath_field = "//div[@class='rt-tr -odd']/div["+field_column_no+"]";
//     cy.xpath(xpath_field).should('have.text', value);
// })
// I want to create a function that is automatically checking the entire row from the table. Work in progres...