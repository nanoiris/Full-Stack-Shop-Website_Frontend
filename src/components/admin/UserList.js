import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

export default function UserList(props) {
  console.log(props);
  const userList = props.rows;

  const handleStatusChange = async (user,status) => {
    props.handleStatusChange(user,status);

  }  

  const handleDeleteClick = async (event, user) => {
    event.preventDefault();

    props.handleDeleteClick(user);
  };

  return (
    <div className="container">
      <br />
      <br />
      <h4 className="text-center display">Admin Dashboard</h4>

      <Table className="table table-striped table-hover align-middle table-sm caption-top table-responsive">
        {/*<Table striped bordered hover>*/}
        <caption>List of Users</caption>

        <thead className="table-info text-center">
          <tr>
            <th scope="col">#</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody className=" text-center">
          {userList.map((user, i) => (
            <tr key={user._id}>
              <th scope="row">{++i}</th>

              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>

              <td>
                <Button
                  className="me-3"
                  size="sm"
                  variant="primary"
                  onClick={()=>handleStatusChange(user,'active')}
                  disabled={!user.status || user.status === "active"}
                >
                  Activate
                </Button>
                <Button className="me-3" size="sm" variant="info" onClick={(event)=>handleStatusChange(user,'disabled')} disabled={user.status === "disabled" || user.role ==="admin"}>
                  Deactivate
                </Button>
                <Button size="sm" variant="danger" onClick={(event) => handleDeleteClick(event, user)} disabled={!user.status || user.status === "active" || user.role ==="admin"}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
