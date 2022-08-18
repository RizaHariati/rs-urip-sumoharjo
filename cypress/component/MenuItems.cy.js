/// <reference types="Cypress" />
const { default: MenuItems } = require("../../components/MenuItems");

describe("MenuItems.cy.js", () => {
  it("mount menuitems", () => {
    cy.mount(<MenuItems />);
  });
});
