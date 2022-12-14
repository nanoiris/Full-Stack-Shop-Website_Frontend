import React, { useEffect, useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Unstable_Grid2";

import Logout from "./Logout";

import { useNavigate } from "react-router-dom";
import AuthContext from "../context/authContext";
import ThemeContext from "../context/themeContext";

function Header() {
  const [isLogout, setIsLogout] = React.useState(false);

  const navigate = useNavigate();
  const { logout,navItems } = React.useContext(AuthContext);
  const { changeTheme } = React.useContext(ThemeContext);

  const closePopup = () =>{
     setIsLogout(false);
  }

  const logoutHandler = () => {
     logout();
     navigate("/", { replace: true });
  }  

  const go = (url) => {
    try {
      if (url === "/logout") {
        setIsLogout(true);
      } else navigate(url, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

    return (
      <>
        <Logout isLogout={isLogout} closePopup={closePopup} logout={logoutHandler} />
        <HeaderBar changeTheme={changeTheme} navItems={navItems} go={go} />
      </>
    )
}

function HeaderBar({ changeTheme, navItems, go }) {
  return (
    <AppBar component="nav" sx={{zIndex:9999}}>
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
          <Grid container spacing={1}>
            <Grid xs={1}>MERN</Grid>
            <Grid xs={1}>
              <FormControlLabel control={<Switch onChange={changeTheme} />} label="Theme" />
            </Grid>
          </Grid>
        </Typography>

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map((item) => (
            <Button
              key={item.title}
              sx={{ color: "#fff" }}
              onClick={() => {
                go(item.url);
              }}
            >
              {item.title}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
