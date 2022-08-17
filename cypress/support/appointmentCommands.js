/// <reference types="Cypress" />

/* ---------------------------------------------------------------- */
/*                       appointments commands                      */
/* ---------------------------------------------------------------- */
const gender = [
  { id: 0, label: "Female", value: "female" },
  { id: 1, label: "Male", value: "male" },
];
const relationshipOptions = [
  { id: 0, label: "Saya Orang tua/wali dari Pasien", value: "orang tua/wali" },
  { id: 1, label: "Saya Anak dari Pasien", value: "anak" },
  { id: 2, label: "Saya Suami/Istri dari Pasien", value: "suami/istri" },
  { id: 3, label: "Perusahaan", value: "perusahaan" },
  { id: 4, label: "Lainnya", value: "lainnya" },
];

Cypress.Commands.add("fillingData", function () {
  const patientdata = this.patientdata;
  const inputData = Object["values"](patientdata.values);
  const inputForm = Object["keys"](patientdata.values);

  inputForm.slice(3, 9).forEach((item, index) => {
    if (index === 2) {
      cy.get("#gender-container")
        .children()
        .each((childItem, childIndex) => {
          const { value } = gender[childIndex];

          if (value === inputData.slice(0, 9)[index]) {
            cy.wrap(childItem)
              .find(`#${item}`)
              .and("have.value", value)
              .check();
          }
        });
    }
    cy.get(`#${item}`).type(inputData.slice(3, 9)[index]);
  });
});

Cypress.Commands.add("fillingFullData", function () {
  const patientdata = this.patientdata;
  const inputData = Object["values"](patientdata.values);
  const inputForm = Object["keys"](patientdata.values);

  inputForm.slice(0, 9).forEach((item, index) => {
    if (index === 1) {
      cy.get("#relationship-container")
        .children()
        .each((childItem, childIndex) => {
          const { value } = relationshipOptions[childIndex];

          if (value === inputData.slice(0, 9)[index]) {
            cy.wrap(childItem)
              .find(`#${item}`)
              .and("have.value", value)
              .check();
          }
        });
    } else if (index === 5) {
      cy.get("#gender-container")
        .children()
        .each((childItem, childIndex) => {
          const { value } = gender[childIndex];
          console.log(value);
          if (value === inputData.slice(0, 9)[index]) {
            cy.wrap(childItem)
              .find(`#${item}`)
              .and("have.value", value)
              .check();
          }
        });
    } else {
      cy.get(`#${item}`).type(inputData.slice(0, 9)[index]);
    }
  });
});

Cypress.Commands.add("checkingData", function () {
  const patientdata = this.patientdata;
  const inputData = Object["values"](patientdata.values);
  const inputForm = Object["keys"](patientdata.values);

  inputForm.slice(3, 9).forEach((item, index) => {
    if (index === 2) {
      cy.get("#gender-container")
        .children()
        .each((childItem, childIndex) => {
          const { value } = gender[childIndex];
          if (value === inputData.slice(3, 9)[index]) {
            cy.wrap(childItem).find(`#${item}`).should("have.value", value);
          }
        });
    }
    cy.get(`#${item}`).should(
      "have.attr",
      "value",
      inputData.slice(3, 9)[index]
    );
  });
});

Cypress.Commands.add("checkingFullData", function () {
  const patientdata = this.patientdata;
  const inputData = Object["values"](patientdata.values);
  const inputForm = Object["keys"](patientdata.values);

  inputForm.slice(0, 9).forEach((item, index) => {
    if (index === 1) {
      cy.get("#relationship-container")
        .children()
        .each((childItem, childIndex) => {
          const { value } = relationshipOptions[childIndex];

          if (value === inputData.slice(0, 9)[index]) {
            cy.wrap(childItem).find(`#${item}`).should("have.value", value);
          }
        });
    } else if (index === 5) {
      cy.get("#gender-container")
        .children()
        .each((childItem, childIndex) => {
          const { value } = gender[childIndex];

          if (value === inputData.slice(0, 9)[index]) {
            cy.wrap(childItem).find(`#${item}`).should("have.value", value);
          }
        });
    } else {
      cy.get(`#${item}`).should(
        "have.attr",
        "value",
        inputData.slice(0, 9)[index]
      );
    }
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
