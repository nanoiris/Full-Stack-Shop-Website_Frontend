import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const ThemeContext = React.createContext();
export default ThemeContext;

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const ThemeContextProvider = (props) => {
  const [theme, setTheme] = React.useState(lightTheme);

  const changeTheme = () => {
    if (theme.palette.mode === "dark") {
      setTheme(lightTheme);
    } else setTheme(darkTheme);
  };

  const contextValue ={
    theme: theme,
    lightTheme: lightTheme,
    darkTheme: darkTheme,
    changeTheme:changeTheme
  }
  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
