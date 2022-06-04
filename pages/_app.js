import "../styles/globals.css";
import Layout from "./components/Layout";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import { Provider } from "react-redux";
import { persistor, store } from "../slice";
import { PersistGate } from "redux-persist/integration/react";
config.autoAddCss = false;
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
