/// <reference types="Cypress" />

Cypress.Commands.add("typeSearch", (data, searchKey, status) => {
  let response = {
    msg: "Data successfully fetched",
    total: 5,
    allDoctors: data,
  };
  let keyword = "";
  searchKey.split("").forEach((item, index) => {
    keyword = keyword + item;
    const doctorFiltered = data.filter((item) => {
      if (status === "poli") {
        return item.poli.toLowerCase().includes(keyword);
      } else {
        return item.nama.toLowerCase().includes(keyword);
      }
    });

    cy.intercept("GET", `${URL}${status}=${keyword}`, {
      ...response,
      allDoctors: doctorFiltered,
    }).as(`response${index}`);
  });
});

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
