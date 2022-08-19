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
const { mount } = require("cypress/react");
const { Provider } = require("react-redux");
const { store, persistor } = require("../../slice");
require("@fortawesome/fontawesome-svg-core/styles.css"); // import Font Awesome CSS
const { config } = require("@fortawesome/fontawesome-svg-core");
const { default: Layout } = require("../../components/Layout");
config.autoAddCss = false;
export function Wrapper({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export function WrapperLayout({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

Cypress.Commands.add("mount", mount);

// Example use:
// cy.mount(<MyComponent />)
