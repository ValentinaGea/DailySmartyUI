import React from "react";
import ReactDOM from "react-dom/client"; // React 18 usa createRoot
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app";
import reducers from "./reducers";

import "./style/main.scss";

// Crear store sin middlewares por ahora, pero mantengo estructura para middleware si quieres agregar
const store = createStore(
  reducers,
  applyMiddleware() // Puedes agregar middlewares como redux-thunk aquí
);

function main() {
  const container = document.querySelector(".app-wrapper");
  const root = ReactDOM.createRoot(container);

  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

document.addEventListener("DOMContentLoaded", main);
