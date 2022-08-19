import FindDoctorInput from "../../components/FindDoctorInput";
import { WrapperLayout } from "../support/component";

describe("FindDoctorInput.cy.js", () => {
  beforeEach(function () {
    cy.mount(<WrapperLayout Component={FindDoctorInput} />);
    cy.fixture("doctordb").then(function (data) {
      this.data = Object.values(data);
    });
  });

  it.only("should be visible", () => {
    const searchFormContainer = "[data-testid='search-doctor-form-container']";
    cy.get(searchFormContainer).should("be.visible");
    cy.get("#search-doctor").focus();
    cy.get("#specialization-list").should("be.visible");
  });

  it.only("should show list of filtered specialist as typed", function () {
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
          total: doctorFiltered.length,
          allDoctors: doctorFiltered,
        }).as(`response${index}`);
      }
    });

    // cy.get("#search-doctor").type(searchKey);
  });
});
