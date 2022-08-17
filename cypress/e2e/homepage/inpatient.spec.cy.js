describe("Inpatient", () => {
  beforeEach(() => {
    cy.visit("/main/inpatient");
    cy.fixture("services").then(function (data) {
      this.data = Object.values(data);
    });
  });
  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });
});
