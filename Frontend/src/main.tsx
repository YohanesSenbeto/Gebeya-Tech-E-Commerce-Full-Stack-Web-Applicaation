import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Start from "./start";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./components/Contexts/AuthContext";
import { Provider } from "react-redux";
import store from "./components/gebeyacart/App/store";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <AuthProvider>
          <Provider store={store}>
            <Start />
          </Provider>
        </AuthProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
