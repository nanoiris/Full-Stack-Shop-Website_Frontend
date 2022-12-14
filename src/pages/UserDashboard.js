import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import PasswordIcon from "@mui/icons-material/Password";
import Dashboard from "../components/Dashboard";
import { ChangePassword } from "./userDashboard/ChangePassword";
import EditProfile from "./userDashboard/EditProfile";
import Orders from "./userDashboard/Orders";

import http from "../utils/http";
import { api_change_password_url, api_profile_url, api_normal_orders_url, api_cancel_order_url } from "../utils/constants";
import React from "react";

const list = [
  {
    title: "Profile",
    icon: <PeopleIcon />,
    childIndex: 0,
  },
  {
    title: "Password",
    icon: <PasswordIcon />,
    childIndex: 1,
  },
  {
    title: "Order",
    icon: <ShoppingCartIcon />,
    childIndex: 2,
  },
];

const profileHandler = async (profileForm) => {
  console.log("profileHandler");
  return http.post(api_profile_url, profileForm);
};

const changePasswordHandler = async (passwordForm) => {
  console.log("changePasswordHandler");
  return http.post(api_change_password_url, passwordForm);
};

const getOrders = async () => {
  console.log("changePasswordHandler");
  let orders = await http.get(api_normal_orders_url);
  return orders;
};

const cancelOrderHandler = async (row) => {
    console.log("cancel order");
    console.log(row._id);
    http.post(api_cancel_order_url + row._id).then(
        resp => {
            console.log(resp);
        }
    );
}     

export default function UserDashboard() {
  const [orders,setOrders] = React.useState();
  React.useEffect(() => {
    getOrders().then(
        resp =>{
            setOrders(resp);
        }
    );

  }, []);

  const portlets = [<EditProfile handler={profileHandler} />, <ChangePassword handler={changePasswordHandler} />, <Orders items={orders} cancelOrderHandler={cancelOrderHandler}/>];

  return <Dashboard list={list} children={portlets} />;
}
