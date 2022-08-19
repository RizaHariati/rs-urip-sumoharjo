/// <reference types="Cypress" />

const { default: Navbar, MenuButton } = require("../../components/Navbar");
const { menu_item } = require("../../data/data_menu");

const { Wrapper } = require("../support/component");

describe("MenuItems.cy.js", () => {
  beforeEach(() => {
    cy.mount(<Wrapper Component={MenuButton} />);
  });

  it.only("test this menuitems", () => {
    cy.mount(<Wrapper Component={MenuButton} />);
    cy.get("#navbar-dropdown-menu").then(($div) => {
      if ($div.hasClass("menu h-0 py-0")) {
        cy.get("#navbar-dropdown-menu").should("not.be.visible");
        cy.get("#navbar-dropdown").click();
      }
    });

    cy.get("#navbar-dropdown-menu").should("be.visible");
    menu_item.forEach((_, index) => {
      cy.get(`#menu-item-${index}`)
        .should("have.text", menu_item[index].title)
        .and("be.visible");
    });

    cy.get("#menu-item-container")
      .children()
      .each(($div, index) => {
        cy.wrap($div).should("have.text", menu_item[index].title);
      });
  });
});
