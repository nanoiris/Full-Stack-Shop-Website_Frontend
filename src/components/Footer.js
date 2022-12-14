import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Footer() {
  return (
      <Container maxWidth="sm">
        <Typography variant="body2" color="text.secondary" textAlign="center">
          {"Copyright © "}
          <Link color="inherit" href="#">
          MERN Furniture 
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
  );
}

export default Footer;
