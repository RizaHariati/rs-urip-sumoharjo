describe("Inpatient", () => {
  beforeEach(() => {
    cy.visit("/main/inpatient");
    cy.fixture("data_inap").then(function (data) {
      this.data = data;
    });
  });

  it("should show the list of facility of certain room class when button is clicked ", function () {
    const bedData = this.data;
    cy.get("#inpatient-class-container")
      .children()
      .each((item, index) => {
        const { id, kelas } = bedData[index];
        cy.wrap(item).get("h4").contains(kelas).should("exist");
        if (bedData[index].kelas === "President Suite") {
          cy.get(`#inpatient-${id}`)
            .contains("button", "Fasilitas yang disediakan...")
            .click();

          cy.get(`#inpatient-${id}-facility`).should("exist");
        } else {
          cy.get(`#inpatient-${id}-facility`).should("not.exist");
        }
      });
  });
  it("should go to the appointment page containing the searchkey", function () {
    const bedData = this.data;

    const { id, kelas } = bedData[0];
    cy.get(`#inpatient-${id}`)
      .get("button")
      .contains("Fasilitas yang disediakan...")
      .click();

    cy.get(`#inpatient-${id}-facility`)
      .get("button")
      .contains("mendaftar", { matchCase: false })
      .click();

    cy.location("pathname").should("eq", "/main/schedule-appointment");
    cy.get("#purpose").should("not.exist");
    cy.get("#appointmentPurpose").should("have.value", kelas);
    cy.go("back");
    cy.location("pathname").should("eq", "/main/inpatient");
  });
});
