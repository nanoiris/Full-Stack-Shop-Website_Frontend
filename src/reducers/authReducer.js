import { POST_LOGIN_BEGIN, POST_LOGIN_SUCCESS, POST_LOGIN_ERROR, LOGOUT } from "../actions";

const authReducer = (state, action) => {
  if (action.type === POST_LOGIN_BEGIN) {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");

    return { ...state, isLoading: true };
  } else if (action.type === POST_LOGIN_SUCCESS) {
    
    let token = action.content.token;
    let role = action.content.role;

    if (!token) {
      return { ...state, isLoading: false };
    }

    let changedState = { ...state, isLoading: false };
    changedState.token = token;
    changedState.role = role;
    changedState.isLoggedIn = true;
    
    if (role === "admin") {
      changedState.navItems = [...changedState.publicItems, ...changedState.adminItems,...changedState.loggedInItems];
    }else changedState.navItems = [...changedState.publicItems, ...changedState.loggedInItems];
   
    sessionStorage.setItem("token",token);
    sessionStorage.setItem("role",role);
   
    
    return changedState;
  
  } else if (action.type === POST_LOGIN_ERROR) {

    return { ...state, isLoading: false };
  
} else if (action.type === LOGOUT) {

    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");

    let changedState = { ...state, isLoading: false };
    changedState.navItems =[
        ...changedState.publicItems, ...changedState.loggedOutItems
    ];
    changedState.token = "";
    changedState.role = "";
    changedState.isLoggedIn = false;

    return changedState;
  }
};
export default authReducer;
