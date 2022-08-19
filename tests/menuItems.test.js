import { render as rtlRender, screen } from "@testing-library/react";
import MenuItems from "../components/MenuItems";
import { store } from "../slice";
import { Provider } from "react-redux";

const render = (component) =>
  rtlRender(<Provider store={store}>{component}</Provider>);

// describe("Testing Menu Items", () => {
//   it("check if the menu list exist", async () => {
//     render(<MenuItems />);
//     const menuItemComponent = screen.getByText(/Tentang RS Urip Sumoharjo/i);
//     expect(menuItemComponent).toBeInTheDocument;
//   });
//   it("check if the menu list exist", async () => {
//     render(<MenuItems />);
//     const menuItemComponent = screen.getAllByRole("button", {
//       name: "Tentang RS Urip Sumoharjo",
//     });
//     expect(menuItemComponent).toBeInTheDocument;
//   });

//   it("check if the menu list exist", async () => {
//     render(<MenuItems />);
//     const menuItemComponent = screen.getByTestId("navbar-dropdown-menu");
//     expect(menuItemComponent).toBeTruthy();
//   });
// });

describe("Testing Menu items children", () => {
  it("check if about button is visible", async () => {
    render(<MenuItems />);
    const Aboutbtn = screen.getByRole("button", {
      name: "Tentang RS Urip Sumoharjo",
    });
    expect(Aboutbtn).toBeVisible;
  });
});
