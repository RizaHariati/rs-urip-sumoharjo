/// <reference types="Cypress" />

const URL = "https://rs-urip-sumoharjo-api.herokuapp.com/api/v1/doctors/?";

describe("Find Doctor", () => {
  beforeEach(() => {
    cy.visit("/main/find-doctor");
    cy.fixture("doctordb").then(function (data) {
      this.data = Object.values(data);
    });
  });

  it("should change placeholder and empty keywords when clicked", () => {
    cy.get("#name-search-btn").click();
    cy.get("#search-doctor").should(
      "have.attr",
      "placeholder",
      "Nama dokter..."
    );

    cy.get("#specialization-search-btn").click();
    cy.get("#search-doctor").should(
      "have.attr",
      "placeholder",
      "Spesialisasi dokter..."
    );
  });

  it("should show drop list when clicked on specialization-search mode", () => {
    cy.get("#specialization-search-btn").click();
    cy.get("#search-doctor").focus();
    cy.get("#specialization-list").should("be.visible");
    cy.get("#specialization-list")
      .children()
      .each((_, index) => {
        cy.get("#specialization-item").should("be.visible");
      });
  });

  it("should hide list when wrong keyword typed", function () {
    const data = this.data;
    const searchKey = "bedahhm";
    const status = "poli";
    let response = {
      msg: "Data successfully fetched",
      total: 5,
      allDoctors: data,
    };
    const failresponse = {
      msg: "Data successfully fetched",
      total: 0,
      allDoctors: [],
    };
    let keyword = "";
    searchKey.split("").forEach((item, index) => {
      keyword = keyword + item;
      if (index < "bedah".length) {
        const doctorFiltered = data.filter((item) => {
          return item.poli.toLowerCase().includes(keyword);
        });
        cy.intercept("GET", `${URL}${status}=${keyword}`, {
          ...response,
          allDoctors: doctorFiltered,
        }).as(`response${index}`);
      } else {
        cy.intercept("GET", `${URL}${status}=${keyword}`, failresponse).as(
          `response${index}`
        );
      }
    });
    cy.get("#specialization-search-btn").click();
    cy.get("#search-doctor").type(searchKey);
    cy.get("#specialization-list").should("not.exist");
    cy.contains(
      "#doctor-list-not-exist",
      `Tidak ada ${status} dengan kata kunci ${searchKey}`
    ).should("be.visible");
  });

  it.only("should show list of filtered items when typed and show doctor cards when item clicked", function () {
    const data = this.data;
    const searchKey = "Bedah";
    const status = "poli";
    let response = {
      msg: "Data successfully fetched",
      total: 5,
      allDoctors: data,
    };
    let keyword = "";
    searchKey.split("").forEach((item, index) => {
      if (index < searchKey.length) {
        keyword = keyword + item;
        const doctorFiltered = data.filter((item) => {
          return item.poli.toLowerCase().includes(keyword.toLowerCase());
        });

        cy.intercept("GET", `${URL}${status}=${keyword}`, {
          ...response,
          allDoctors: doctorFiltered,
        }).as(`response${index}`);
      }
    });

    cy.get("#specialization-search-btn").click();
    cy.get("#search-doctor").type(searchKey);

    cy.get("#specialization-list").should("be.visible");
    cy.contains("#specialization-item", searchKey).should("be.visible");
    cy.contains("#specialization-item", searchKey).click();
    cy.get("#doctor-card-container").should("be.visible");
  });

  it("should go to appointment page with the doctor's data when mendaftar button clicked", function () {
    const data = this.data;
    const searchKey = "Bedah";
    const status = "poli";
    let response = {
      msg: "Data successfully fetched",
      total: 5,
      allDoctors: data,
    };
    let keyword = "";
    searchKey.split("").forEach((item, index) => {
      if (index < searchKey.length) {
        keyword = keyword + item;
        const doctorFiltered = data.filter((item) => {
          return item.poli.toLowerCase().includes(keyword.toLowerCase());
        });

        cy.intercept("GET", `${URL}${status}=${keyword}`, {
          ...response,
          allDoctors: doctorFiltered,
        }).as(`response${index}`);
      }
    });

    const doctorFiltered = data.filter((item) => {
      return item.poli.toLowerCase().includes(searchKey.toLowerCase());
    });

    cy.get("#specialization-search-btn").click();
    cy.get("#search-doctor").type(searchKey);

    cy.get("#specialization-list").should("be.visible");
    cy.wait(1000);
    cy.contains("#specialization-item", searchKey).should("be.visible");
    cy.contains("#specialization-item", searchKey).click();
    cy.wait(1000);
    cy.get("#doctor-card-container").should("be.visible");

    cy.get("#doctor-card-container")
      .children()
      .its("length")
      .should("eq", doctorFiltered.length);

    cy.get("#doctor-card-container")
      .children()
      .each((_, index) => {
        cy.get(`#doctor-card-${index}`).should(
          "contain",
          doctorFiltered[index].nama
        );
      });

    cy.get("#doctor-card-0").find("button").click();
    cy.location("pathname").should("eq", "/main/schedule-appointment");

    cy.get("#purpose").should("not.exist");
    cy.get("#appointmentPurpose").should("have.value", doctorFiltered[0].nama);
    cy.go("back");
  });

  it("should hide doctor cards when doctor not found on doctor-search mode", function () {
    const data = this.data;
    const searchKey = "Ahmad";
    const status = "nama";
    let response = {
      msg: "Data successfully fetched",
      total: 5,
      allDoctors: data,
    };
    const failresponse = {
      msg: "Data successfully fetched",
      total: 0,
      allDoctors: [],
    };
    let keyword = "";
    searchKey.split("").forEach((item, index) => {
      if (index < searchKey.length) {
        keyword = keyword + item;
        const doctorFiltered = data.filter((item) => {
          return item.nama.toLowerCase().includes(keyword.toLowerCase());
        });

        if (doctorFiltered.length > 0) {
          cy.intercept("GET", `${URL}${status}=${keyword}`, {
            ...response,
            allDoctors: doctorFiltered,
          }).as(`response${index}`);
        } else {
          cy.intercept("GET", `${URL}${status}=${keyword}`, failresponse).as(
            `failresponse${index}`
          );
        }
      }
    });
    cy.get("#name-search-btn").click();
    cy.get("#search-doctor").type(searchKey);
    cy.wait(500);
    cy.get("#doctor-card-container").should("not.exist");
    cy.contains(
      "#doctor-list-not-exist",
      `Tidak ada ${status} dengan kata kunci ${searchKey}`
    ).should("be.visible");
  });

  it("should show doctor cards as typing on doctor-search mode", function () {
    const data = this.data;
    const searchKey = "Surachman";
    const status = "nama";
    let response = {
      msg: "Data successfully fetched",
      total: 5,
      allDoctors: data,
    };

    let keyword = "";
    searchKey.split("").forEach((item, index) => {
      if (index < searchKey.length) {
        keyword = keyword + item;
        const doctorFiltered = data.filter((item) => {
          return item.nama.toLowerCase().includes(keyword.toLowerCase());
        });

        cy.intercept("GET", `${URL}${status}=${keyword}`, {
          ...response,
          allDoctors: doctorFiltered,
        }).as(`response${index}`);
      }
    });

    cy.get("#name-search-btn").click();
    cy.get("#search-doctor").type(searchKey);
    cy.get("#doctor-card-container").children().should("be.visible");

    const doctorFiltered = data.filter((item) => {
      return item.nama.toLowerCase().includes(searchKey.toLowerCase());
    });
    cy.get("#doctor-card-container")
      .children()
      .each((_, index) => {
        cy.get(`#doctor-card-${index}`).should(
          "include.text",
          doctorFiltered[index].nama
        );
      });
  });
});
