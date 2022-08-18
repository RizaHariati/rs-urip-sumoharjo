/// <reference types="Cypress" />

const URL_PATIENT =
  "https://rs-urip-sumoharjo-api.herokuapp.com/api/v1/patient/";

const gender = [
  { id: 0, label: "Female", value: "female" },
  { id: 1, label: "Male", value: "male" },
];

describe("Patient Data", () => {
  beforeEach(() => {
    cy.visit("/main/patient-data");
    cy.fixture("login").then(function (data) {
      this.logindata = data;
    });
    cy.fixture("patientdata").then(function (data) {
      this.patientdata = data;
    });
    cy.fixture("newpatientdata").then(function (data) {
      this.newpatientdata = data;
    });
    cy.fixture("register").then(function (data) {
      this.registerdata = data;
    });
  });

  it("it should go to register and back to login when link is clicked", function () {
    cy.get("button").contains("register").click();
    cy.get("#register-container").should("be.visible");
    cy.get("#login-container").should("not.exist");

    cy.get("button").contains("login").click();
    cy.get("#login-container").should("be.visible");
    cy.get("#register-container").should("not.exist");
  });

  it("it should show warnings if not all data is filled in when submitted ", function () {
    cy.get("#login-form").get("#email").type("riza@yahoo.com");
    cy.get("#login-form").submit();
  });

  it("it should show warning login alert if account is not found", function () {
    const { values } = this.newpatientdata;
    cy.intercept("POST", `${URL_PATIENT}/login`, {
      statusCode: 401,
      body: { msg: "Invalid data" },
    }).as("fail response");
    cy.get("#login-form").get("#email").type(values.email);
    cy.get("#login-form").get("#password").type("password");
    cy.get("#login-form").submit();
    cy.get("#loading-spinner").should("be.visible");
    cy.contains("#alert-modal", "Invalid data").should("be.visible").wait(500);
    cy.contains("#alert-modal", "Invalid data").should("not.exist");
  });

  it("it should show success alert if login is successful", function () {
    const logindata = this.logindata;
    const { email } = logindata.findPatient;
    cy.intercept("POST", `${URL_PATIENT}/login`, {
      statusCode: 200,
      body: logindata,
    }).as("fail response");

    // header should show general welcome banner
    cy.get("#login-welcome")
      .get("h5")
      .should("include.text", "Untuk menjaga kerahasiaan");

    // start login
    cy.get("#login-form").get("#email").type(email);
    cy.get("#login-form").get("#password").type("password");
    cy.get("#login-form").submit();
    cy.get("#loading-spinner").should("be.visible");
    cy.contains("#alert-modal", "Success", { matchCase: false })
      .should("be.visible")
      .wait(500);
    cy.contains("#alert-modal", "Success", { matchCase: false }).should(
      "not.exist"
    );
    // header should show account welcome banner
    cy.get("#login-welcome")
      .get("h5")
      .should("include.text", "Selamat datang kembali");
    cy.get("#login-form").should("not.exist");
    cy.contains("button", "logout").should("be.visible");
  });

  it("it should show warnings if there not all fields are filled", function () {
    cy.get("button").contains("register").click();
    cy.get("#register-container").should("be.visible");
    const patientdata = this.patientdata;
    const inputData = Object["values"](patientdata.values);
    const inputForm = Object["keys"](patientdata.values);

    inputForm.slice(3, 6).forEach((item, index) => {
      if (index === 2) {
        cy.get("#register-gender-container");
      } else {
        cy.get(`#${item}`).type(inputData.slice(3, 6)[index]);
      }
    });

    cy.get("#register-form").submit();
    cy.get("[class='error']").should("be.visible");
  });

  it("it should show alert if the account already exists", function () {
    cy.intercept("POST", `${URL_PATIENT}/register`, {
      statusCode: 400,
      body: {
        msg: "Duplicate value entered for email field, please choose another value",
      },
    }).as("fail response");
    cy.get("button").contains("register").click();
    cy.get("#register-container").should("be.visible");
    const patientdata = this.patientdata;
    const inputData = Object["values"](patientdata.values);
    const inputForm = Object["keys"](patientdata.values);

    inputForm.slice(3, 9).forEach((item, index) => {
      if (index === 2) {
        cy.get("#register-gender-container");
      } else {
        cy.get(`#${item}`).type(inputData.slice(3, 9)[index]);
      }
    });

    cy.get(`#password`).type("password");

    cy.get("#register-gender-container")
      .children()
      .each((_, childIndex) => {
        const { value } = gender[childIndex];

        if (value === "female") {
          cy.get(`#gender${childIndex}`).check();
        }
      });

    cy.get("#register-form").submit();
    cy.get("#loading-spinner").should("be.visible");
    cy.contains(
      "#alert-modal",
      "Duplicate value entered for email field, please choose another value",
      { matchCase: false }
    )
      .should("be.visible")
      .wait(500);
  });

  it("it should show succes alert if the registration is successful", function () {
    const register = this.registerdata;
    cy.intercept("POST", `${URL_PATIENT}/register`, {
      statusCode: 202,
      body: register,
    }).as("success response");
    cy.get("button").contains("register").click();
    cy.get("#register-container").should("be.visible");
    const patientdata = this.newpatientdata;
    const inputData = Object["values"](patientdata.values);
    const inputForm = Object["keys"](patientdata.values);

    inputForm.slice(3, 9).forEach((item, index) => {
      if (index === 2) {
        cy.get("#register-gender-container");
      } else {
        cy.get(`#${item}`).type(inputData.slice(3, 9)[index]);
      }
    });

    cy.get(`#password`).type("password");

    cy.get("#register-gender-container")
      .children()
      .each((_, childIndex) => {
        const { value } = gender[childIndex];

        if (value === "female") {
          cy.get(`#gender${childIndex}`).check();
        }
      });

    cy.get("#register-form").submit();
    cy.get("#loading-spinner").should("be.visible");
    cy.contains("#alert-modal", "registration successful", {
      matchCase: false,
    }).should("be.visible");
    cy.get("#login-container").should("be.visible");
  });
});
