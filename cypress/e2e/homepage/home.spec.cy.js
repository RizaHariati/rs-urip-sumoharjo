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
  s;

  it("should have slides constantly sliding", function () {
    cy.clock();
    const adData = this.data;
    cy.get("#ad-toggle-btn").click();
    cy.get("#ad-container").should("have.class", "h-80");
    cy.get("#ad-slides-container")
      .children()
      .each((_, index) => {
        cy.tick(3900);
        const { id, title } = adData[index];
        if (index < adData.length - 1) {
          if (parseInt(id) === index) {
            cy.contains("#ad-slide", title).should("be.visible");
          } else {
            cy.contains("#ad-slide", title).should("not.be.visible");
          }
        }
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

  it("navbar-logo link should go home when clicked", () => {
    cy.visit("/main/find-doctor");
    cy.get("#navbar-logo").click();
    cy.location("pathname").should("eq", "/");
  });

  it("navbar-home link should go home when clicked", () => {
    cy.visit("/main/find-doctor");
    cy.get("#navbar-home").click();
    cy.location("pathname").should("eq", "/");
  });

  const URL_PATIENT =
    "https://rs-urip-sumoharjo-api.herokuapp.com/api/v1/patient/";

  it("navbar login link should toggle login and logout to page", () => {
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

  it("should dropdown menu when clicked", () => {
    cy.get("#navbar-dropdown").click();
    cy.get("#navbar-dropdown-menu").should("be.visible");
    cy.get("#navbar-dropdown").click();
    cy.get("#navbar-dropdown-menu").should("not.be.visible");
  });
});

context("SideMenu", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.fixture("sidemenu").then(function (data) {
      this.data = data;
    });
    cy.fixture("sidemenu").as("sidemenuData");
  });

  it("should create buttons from array", function () {
    const sidemenuData = this.data;

    cy.get("#side-menu-container").should("be.visible");
    cy.get("#side-menu-container")
      .children()
      .each((item, index) => {
        const { id, title } = sidemenuData[index];

        cy.wrap(item).should("contain", title);
        cy.get(`#side-menu-item-${id}`)
          .invoke("addClass", "bg-opacity-90")
          .children("#side-menu-info")
          .invoke("addClass", "opacity-100 h-8");
        cy.wait(300);
        cy.get(`#side-menu-item-${id}`)
          .invoke("removeClass", "bg-opacity-90")
          .children("#side-menu-info")
          .invoke("removeClass", "opacity-100 h-8");
      });
  });

  it("should go to certain path when clicked", function () {
    const sidemenuData = this.data;
    cy.get("#side-menu-container")
      .children()
      .each((item, index) => {
        const { id, href } = sidemenuData[index];
        cy.get(`#side-menu-item-${id}`).click();

        cy.location("pathname").should("eq", href);
        cy.wait(1000);
      });
  });
});
