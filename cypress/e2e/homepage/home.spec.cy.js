/// <reference types="Cypress" />

context("Advertising", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.fixture("advertising").then(function (data) {
      this.data = data;
    });
  });

  it("should open ad when button clicked", () => {
    cy.get("#ad-toggle-btn").click();
    cy.get("#ad-container").should("have.class", "h-80");
    cy.get("#ad-toggle-btn").click();
    cy.get("#ad-container").should("have.class", "h-0");
  });

  it("should have slides constantly sliding", function () {
    const adData = this.data;
    cy.get("#ad-toggle-btn").click();
    cy.get("#ad-container").should("have.class", "h-80");
    cy.get("#ad-slides-container").each((_, index) => {
      console.log(adData[index]);
      cy.get("#ad-slide").should("contain", adData[index].title);
    });
  });
});

context("Navbar", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("all navbar links should be visible", () => {
    cy.get("#navbar-logo").should("be.visible");
    cy.get("#navbar-login").should("be.visible");
    cy.get("#navbar-home").should("be.visible");
    cy.get("#navbar-dropdown").should("be.visible");
  });

  it("navbar-logo should go home when clicked", () => {
    cy.visit("/main/find-doctor");
    cy.get("#navbar-logo").click();
    cy.location("pathname").should("eq", "/");
  });

  it("navbar-home should go home when clicked", () => {
    cy.visit("/main/find-doctor");
    cy.get("#navbar-home").click();
    cy.location("pathname").should("eq", "/");
  });

  const URL_PATIENT =
    "https://rs-urip-sumoharjo-api.herokuapp.com/api/v1/patient/";

  it("navbar login should toggle login and logout to page", () => {
    cy.clock();
    cy.intercept("POST", `${URL_PATIENT}/login`, { fixture: "login" }).as(
      "successful"
    );
    cy.get("#navbar-login").should("contain", "Login").click();

    cy.location("pathname").should("eq", "/main/patient-data");

    /* --------------------- testing login patient -------------------- */
    cy.get("[placeholder='Masukkan email']").type("riza@yahoo.com");
    cy.get("[placeholder='Masukkan password']").type("password");
    cy.get("#login-form").submit();
    // cy.contains("button", "Login").click();
    cy.wait("@successful");
    cy.contains("#alert-modal", "success").wait(500);
    cy.get("#alert-modal").invoke("hide");
    cy.get("#navbar-login").should("contain", "Logout").click();
    cy.location("pathname").should("eq", "/");
  });
});

/* ---------------- test drop down toggle drop menu --------------- */

/* ---------------- test side menu--------------- */
