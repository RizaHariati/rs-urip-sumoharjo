/// <reference types="Cypress" />

const URL_PATIENT =
  "https://rs-urip-sumoharjo-api.herokuapp.com/api/v1/patient/";

const relationshipOptions = [
  { id: 0, label: "Saya Orang tua/wali dari Pasien", value: "orang tua/wali" },
  { id: 1, label: "Saya Anak dari Pasien", value: "anak" },
  { id: 2, label: "Saya Suami/Istri dari Pasien", value: "suami/istri" },
  { id: 3, label: "Perusahaan", value: "perusahaan" },
  { id: 4, label: "Lainnya", value: "lainnya" },
];

const gender = [
  { id: 0, label: "Female", value: "female" },
  { id: 1, label: "Male", value: "male" },
];

describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("/main/schedule-appointment");
    cy.fixture("login").then(function (data) {
      this.logindata = data;
    });
    cy.fixture("patientdata").then(function (data) {
      this.patientdata = data;
    });
    cy.fixture("newpatientdata").then(function (data) {
      this.newpatientdata = data;
    });
  });

  it("should go to login page when login button is clicked", () => {
    cy.get("#schedule-login-btn").should("exist").click();
    cy.location("pathname").should("eq", "/main/patient-data");
    cy.go("back");
  });

  it("should changes login banner text and fill out forms automatically after login", function () {
    const loginData = this.logindata.findPatient;
    const patientdata = this.patientdata;
    const userpassword = "password";
    const inputForm = Object["keys"](patientdata.values);
    const inputData = Object["values"](patientdata.values);

    cy.intercept("POST", `${URL_PATIENT}/login`, { fixture: "login" }).as(
      "successful"
    );

    cy.get("#login-banner").should("include.text", "login terlebih dahulu");
    cy.get("#schedule-login-btn").should("exist").click();
    cy.location("pathname").should("eq", "/main/patient-data");
    cy.get("[placeholder='Masukkan email']").type(loginData.email);
    cy.get("[placeholder='Masukkan password']").type(userpassword);
    cy.get("#login-form").submit();
    cy.wait("@successful");
    cy.go("back");

    cy.get("#login-banner")
      .should("include.text", "Selamat datang")
      .and("include.text", loginData.name);
    cy.get("#patient-fields-container").should("exist");

    inputForm.slice(3, 9).forEach((item, index) => {
      cy.get(`#${item}`).should("exist");

      cy.get(`#${item}`).should(
        "have.attr",
        "value",
        inputData.slice(3, 9)[index]
      );
    });
  });

  it("should toggle self appointment button when buttons clicked", function () {
    cy.contains("button", "orang lain", { matchCase: false }).click();
    cy.get("#schedule-others").should("be.visible");
    cy.contains("button", "sebagai pasien", { matchCase: false }).click();
    cy.get("#schedule-others").should("not.exist");
  });

  it("should keep all the values when self-registrations button is toggled", function () {
    cy.contains("button", "orang lain", { matchCase: false }).click();

    cy.fillingFullData();

    cy.contains("button", "sebagai pasien", { matchCase: false }).click();

    cy.checkingData();

    cy.contains("button", "orang lain", { matchCase: false }).click();

    cy.checkingFullData();
  });

  it("should trigger warnings if submit button is pushed before all the data filled out", function () {
    cy.contains("button", "daftarkan", { matchCase: false }).click();
    cy.get("[class='error']").should("be.visible");
  });

  it("should reset the form when reset button clicked", function () {
    const inputForm = Object["keys"](this.patientdata.values);
    cy.fillingData();
    cy.contains("button", "reset", { matchCase: false }).click();

    inputForm.slice(3, 9).forEach((item, index) => {
      if (item === "gender") {
        cy.get(`#${item}`).should("have.attr", "value", "female");
      } else {
        cy.get(`#${item}`).should("have.attr", "value", "");
      }
    });
  });

  it("should trigger a confirmation alert and close it again when cancelled", function () {
    cy.fillingData();
    cy.contains("button", "daftarkan", { matchCase: false }).click();
    cy.get("#modal-container").should("be.visible");
    cy.contains("button", "cancel", { matchCase: false }).click();
    cy.get("#modal-container").should("not.exist");
  });

  it("should trigger a confirmation alert trigger a success alert when confirmed", function () {
    const patientdata = this.patientdata;
    const inputData = Object["values"](patientdata.values);
    const inputForm = Object["keys"](patientdata.values);

    inputForm.slice(3, 9).forEach((item, index) => {
      cy.get(`#${item}`).type(inputData.slice(3, 9)[index]);
    });
    cy.contains("button", "daftarkan", { matchCase: false }).click();
    cy.get("#modal-container").should("be.visible");

    inputData.slice(3, 9).forEach((item) => {
      cy.contains("p", item);
    });
    cy.contains("button", "setuju", { matchCase: false }).click();

    cy.contains("Data dikonfirmasi").should("be.visible");

    cy.contains("button", "OK").click();

    inputForm.slice(3, 9).forEach((item, index) => {
      if (item === "gender") {
        cy.get(`#${item}`).should("have.attr", "value", "female");
      } else {
        cy.get(`#${item}`).should("have.attr", "value", "");
      }
    });
  });
});

/* ----------------------------- list: ---------------------------- */
