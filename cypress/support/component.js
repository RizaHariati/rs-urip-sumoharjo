// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')
require("../../styles/globals.css");
import { mount } from "cypress/react";
const { Provider, useDispatch } = require("react-redux");
const { store } = require("../../slice");
// import "../../styles/globals.css";
// import Layout from "../../components/Layout";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import { resetLayout } from "../../slice/layoutSlice";

// import { PersistGate } from "redux-persist/integration/react";
config.autoAddCss = false;
export function Wrapper({ Component, pageProps }) {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(resetLayout());
  // }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
Cypress.Commands.add("mount", mount);

// Example use:
// cy.mount(<MyComponent />)
