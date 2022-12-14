import React from "react";
import UserList from "../../components/admin/UserList";
import http from "../../utils/http";
import { api_admin_users_url,api_admin_user_url} from "../../utils/constants";


export default function Admin() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [rows, setRows] = React.useState([]);
  
  const fetchData = async (method,url,data) => {
    setIsLoading(true);
    const result = await http.request(method,url);
    setRows(result);
    setIsLoading(false);
  };
  React.useEffect(() => {
    fetchData('get',api_admin_users_url);
  }, []);
 
  const handleStatusChange =(user,status) =>{
    console.log("handleStatusChange");
    fetchData('get',api_admin_user_url + user._id + '/' + status );
  }
  const handleDeleteClick =(user) =>{
    console.log("handleDeleteClick");
    console.log(user);
    fetchData('delete',api_admin_user_url + user._id );
  }
  return (
    <>
      {/* <Header page="home" /> */}
      <div>
        <UserList rows={rows} handleStatusChange={handleStatusChange} handleDeleteClick={handleDeleteClick}/>{" "}
        {/* define userlist in another component and import it */}
      </div>
    </>
  );
}
