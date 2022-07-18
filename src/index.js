import ReactDOM from "react-dom/client";
import "./assets/fonts/FiraGO-Regular.woff";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/index";

import MoonMap from "./LandingPageFDI/Moonmap/moonMap.js";
import "./LandingPageFDI/Moonmap/moonMap.css";

window.MoonMap = MoonMap;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
