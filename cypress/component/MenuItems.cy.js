/// <reference types="Cypress" />

const { default: Layout } = require("../../components/Layout");
const { default: MenuItems } = require("../../components/MenuItems");
const { default: Navbar, MenuButton } = require("../../components/Navbar");

const { Wrapper } = require("../support/component");

describe("MenuItems.cy.js", () => {
  it("mount menuitems", () => {
    cy.mount(<Wrapper Component={MenuButton} />);
    cy.get("#navbar-dropdown").click();
    // cy.contains("Tentang RS Urip Sumoharjo").should("exist");
    cy.contains("Tentang RS Urip Sumoharjo").click();
  });
});
