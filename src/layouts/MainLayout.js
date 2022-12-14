import React from "react";
import { Outlet } from "react-router-dom";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        py:3
      }}
    >
      <Header />
      <Container component="main" >
        <Outlet />
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          backgroundColor: (theme) => (theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[800]),
        }}
      >
        <Footer />
      </Box>
    </Box>
  );
}
export default MainLayout;
