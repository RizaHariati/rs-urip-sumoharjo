const URL = "https://rs-urip-sumoharjo-api.herokuapp.com/api/v1";
describe("Facility", () => {
  beforeEach(() => {
    cy.visit("/main/services");
    cy.fixture("services").then(function (data) {
      this.data = Object.values(data);
    });
  });

  it("should show all the data on loading page and fetch data as typing", function () {
    const data = this.data;
    let response = {
      msg: "Data successfully fetched",
      total: 4,
      facilities: data,
    };

    const searchKey = "ta";
    let keyword = "";
    cy.get("#facility-container").should("exist");

    searchKey.split("").forEach((item, index) => {
      if (index < searchKey.length) {
        keyword = keyword + item;
        const filteredData = data.filter((item) =>
          item.title.toLowerCase().includes(keyword.toLowerCase())
        );

        cy.intercept("GET", `${URL}/facilities/?title=${keyword}`, {
          ...response,
          facilities: filteredData,
        }).as(`response${index}`);
      }
    });

    cy.get("#facility").type(searchKey);
  });

  it("should show warning when data isn't found", function () {
    const data = this.data;
    let response = {
      msg: "Data successfully fetched",
      total: 4,
      facilities: data,
    };
    const failresponse = {
      msg: "Facility data successfuly fetched",
      total: 0,
      facilities: [],
    };

    const searchKey = "ta";
    const searchKeyFalse = "tat";
    let keyword = "";
    cy.get("#facility-container").should("exist");

    searchKeyFalse.split("").forEach((item, index) => {
      keyword = keyword + item;
      if (index < searchKey.length) {
        const filteredData = data.filter((item) =>
          item.title.toLowerCase().includes(keyword.toLowerCase())
        );

        cy.intercept("GET", `${URL}/facilities/?title=${keyword}`, {
          ...response,
          facilities: filteredData,
        }).as(`response${index}`);
      } else {
        cy.intercept(
          "GET",
          `${URL}/facilities/?title=${keyword}`,
          failresponse
        ).as(`responseFail${index}`);
      }
    });

    cy.get("#facility").type(searchKeyFalse);
    cy.get("#facility-container").should("not.exist");
    cy.get("#facility-warning").should("contain.text", "Tidak ditemukan");
  });

  it("should show modal when an item is clicked and hide it when cancel button is clicked", function () {
    const searchKey = "Farmasi";
    cy.get("#facility-list").get("h5").contains(searchKey).click();
    cy.wait(200);
    cy.contains("button", "kembali", { matchCase: false }).click();
  });

  it("should go to the appointment page containing the searchkey", function () {
    const searchKey = "Farmasi";

    cy.contains("#facility-item", searchKey).should("exist");
    cy.get("#facility-list").get("h5").contains(searchKey).click();
    cy.contains("button", "mendaftar", { matchCase: false }).click();
    cy.location("pathname").should("eq", "/main/schedule-appointment");

    cy.get("#purpose").should("not.exist");
    cy.get("#appointmentPurpose").should("have.value", searchKey);
    cy.go("back");
    cy.location("pathname").should("eq", "/main/services");
    cy.get("#facility").should(
      "have.attr",
      "placeholder",
      "Kata kunci fasilitas ..."
    );
  });
});
