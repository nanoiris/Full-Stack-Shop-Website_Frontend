import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/authContext";

import App from "./App";
import "./index.css";
import { FilterContextProvider } from "./context/filterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <FilterContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FilterContextProvider>
  </AuthContextProvider>
);
