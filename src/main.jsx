import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { HelmetProvider } from "react-helmet-async";

// const rootElement = document.getElementById("root");
// if (rootElement.hasChildNodes()) {
//   hydrate(
//     <Provider store={store}>
//       <HelmetProvider>
//         <App />
//       </HelmetProvider>
//     </Provider>,

//     rootElement
//   );
// } else {
//   render(
//     <Provider store={store}>
//       <HelmetProvider>
//         <App />
//       </HelmetProvider>
//     </Provider>,
//     rootElement
//   );
// }
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </Provider>
);
