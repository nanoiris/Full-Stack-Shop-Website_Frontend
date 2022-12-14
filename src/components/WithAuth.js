import React from 'react';
import { Navigate } from "react-router-dom";
import AuthContext from "../context/authContext";

function WithAuth({ role, children }) {
  const auth = React.useContext(AuthContext);

  if (!auth.isLoggedIn) {
    return <Navigate to="/login" />;
  }

  if (role && role !== auth.role) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default WithAuth;
