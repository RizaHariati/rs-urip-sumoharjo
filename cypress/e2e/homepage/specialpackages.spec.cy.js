describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("/main/special-package");
    cy.fixture("data_paketkesehatan").then(function (data) {
      this.data = Object.values(data);
    });
  });

  it("should show the list of medical packages when button is clicked ", function () {
    const packages = this.data;

    cy.get("#packages-container")
      .children()
      .each((item, index) => {
        const { id, title } = packages[index];
        cy.wrap(item).get("h4").contains(title).should("exist");
        if (packages[index].title === "Paket Karyawan") {
          cy.get(`#packages-${id}`).find("button").click();
          cy.get(`#packages-${id}-info`).should("exist");
        } else {
          cy.get(`#packages-${id}-info`).should("not.exist");
        }
      });
  });

  it("should go to the appointment page containing the searchkey", function () {
    const packages = this.data;

    const { id, title } = packages[0];
    cy.get(`#packages-${id}`).find("button").click();

    cy.get(`#packages-${id}-info`)
      .get("button")
      .contains("mendaftar", { matchCase: false })

      .click();

    cy.location("pathname").should("eq", "/main/schedule-appointment");
    cy.get("#purpose").should("not.exist");
    cy.get("#appointmentPurpose").should("have.value", "laboratorium", {
      matchCase: false,
    });
    cy.go("back");
    cy.location("pathname").should("eq", "/main/special-package");
  });
});
