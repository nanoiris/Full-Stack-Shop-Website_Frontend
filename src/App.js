import React from "react";
import { Routes, Route } from "react-router-dom";

import { CssBaseline } from "@mui/material";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Admin from "./pages/adminDashboard/Admin";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Signup from "./pages/Signup";
import UserDashboard from "./pages/UserDashboard";

import WithAuth from "./components/WithAuth";
import { ThemeContextProvider } from "./context/themeContext";
import SingleProductPage from "./pages/SingleProductPage";


function App() {
  return (
    <ThemeContextProvider>
      <CssBaseline />

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} />
          <Route path="signup" element={<Signup />} />
          
          <Route path="userdashboard" element={<WithAuth><UserDashboard /></WithAuth>} />

          <Route path="cart" element={<Cart />} />
          <Route path="product" element={<SingleProductPage />} />
          <Route
            path="admin"
            element={
               <WithAuth role="admin">
              <Admin />
               </WithAuth>
            }
          />

        </Route>
      </Routes>
    </ThemeContextProvider>
  );
}

export default App;
