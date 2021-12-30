import { Provider } from "react-redux";

import stores from "@shared/stores";

import "@styles/styles.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={stores}>
      <Component {...pageProps} /> 
    </Provider>
  );
};

export default MyApp;
