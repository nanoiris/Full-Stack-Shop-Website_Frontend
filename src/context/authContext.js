import React, { useReducer, useCallback } from "react";
import reducer from "../reducers/authReducer";
import http from "../utils/http";
import { api_login_url } from "../utils/constants";
import { POST_LOGIN_BEGIN, POST_LOGIN_SUCCESS, POST_LOGIN_ERROR, LOGOUT } from "../actions";

const AuthContext = React.createContext();
export default AuthContext;

const publicItems = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Products", url: "/products" },
  { title: "Cart", url: "/cart" },
];

const adminItems = [{ title: "Admin", url: "/admin" }];
const loggedInItems = [{ title: "UserDashboard", url: "/userdashboard" },{ title: "Logout", url: "/logout" }];

const loggedOutItems = [
  { title: "Login", url: "/login" },
  { title: "SignUp", url: "/signup" },
];

const initialState = {
  token: "",
  isLoggedIn: false,
  role: "",
  navItems: [...publicItems, ...loggedOutItems],
  publicItems: publicItems,
  adminItems: adminItems,
  loggedInItems: loggedInItems,
  loggedOutItems: loggedOutItems,
  isLoading: false,
};

export const AuthContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
 const loginHandler = async (username, password) => {
    dispatch({ type: POST_LOGIN_BEGIN });
    try {
      let content = await http.post(api_login_url, { username: username, password: password });
      dispatch({ type: POST_LOGIN_SUCCESS, content: content });
    } catch (error) {
      dispatch({ type: POST_LOGIN_ERROR });
    }
  };

  const logoutHandler = useCallback(() => {
    dispatch({ type: LOGOUT });
  }, []);

  const contextValue = {
    ...state,
    login: loginHandler,
    logout: logoutHandler,
  };

  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};
