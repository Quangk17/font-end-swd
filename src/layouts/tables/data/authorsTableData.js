/* eslint-disable react/prop-types */
/* eslint-disable */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
/* eslint-disable */
// Material Dashboard 2 React components
import { Button } from "antd";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

import { getUsers } from "network/network";
import { getUpdateAccount } from "network/network";
import { getDeleteAccount } from "network/network";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function data() {
  const [users, setUsers] = useState([]);
  const [updateAccount, setUpdateAccout] = useState([]);
  const [deleteAccount, setDeleteAccount] = useState([]);


  // const fetchUsers =


  useEffect(() => {
    getUsers()
      .then((res) => {
        // console.log(res);
        console.log("users", res.data.data);
        setUsers(res.data.data);
      })
      .catch((error) => console.log(error));
  }, []);


  const DeleteAccount = (id) => {
    getDeleteAccount(id)
      .then((res) => {
        // fetchUsers
        console.log("delete", id)
      })
      .catch((error) => console.log(error));
  }

  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );



  // function AccountMap(accounts) {
  //   console.log("user",users)
  //   // Validate input (optional but recommended)
  //   if (!accounts || !Array.isArray(accounts)) {
  //     throw new Error('Invalid users array provided.');
  //   }

  //   return accounts.map((account, index) => {
  //     // Validate account object (optional)
  //     if (!account || !account.name || !account.email || !account.roleName) {
  //       console.warn(`Invalid account information at index ${index}. Skipping...`);
  //       return null; // Or handle invalid accounts differently
  //     }

  //     // Create a plain JavaScript object representing the account
  //     return {
  //       author: {
  //         image: team2, // Assuming a constant image
  //         name: account.name,
  //         email: account.email,
  //       },
  //       role: account.roleName,
  //       status: {
  //         // Assume MDBox and MDBadge are components or functions
  //         component: MDBox,
  //         props: {
  //           ml: -1,
  //           children: (
  //             <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
  //           ),
  //         },
  //       },
  //     };
  //   });
  // }

  const rows = users.map((user) => ({
    author: <Author image={team2} name={user.name} email={user.email} />,
    function: <Job title={user.roleName} />,
    status: (
      <MDBox ml={-1}>
        <MDBadge badgeContent={user.status} color={user.status === 'online' ? 'success' : 'secondary'} variant="gradient" size="sm" />
      </MDBox>
    ),
    employed: (
      <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        {user.phoneNUmber}
      </MDTypography>
    ),
    action: (
      <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Update
      </MDTypography>
    ),
    delete: (
      <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium" onClick={DeleteAccount}>
        Delete
      </MDTypography>
    ),
  }));


  return {
    columns: [
      { Header: "User", accessor: "author", width: "45%", align: "left" },
      { Header: "Role", accessor: "function", align: "left" },
      { Header: "Status", accessor: "status", align: "center" },
      { Header: "created day", accessor: "employed", align: "center" },
      { Header: "Update", accessor: "action", align: "center" },
      { Header: "Delete", accessor: "delete", align: "center" },
    ],

    // rows: [
    //   {
    //     author: <Author image={team2} name={users.name} email="john@creative-tim.com" />,
    //     function: <Job title="Manager" description="Organization" />,
    //     status: (
    //       <MDBox ml={-1}>
    //         <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
    //       </MDBox>
    //     ),
    //     employed: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         23/04/18
    //       </MDTypography>
    //     ),
    //     action: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         Update
    //       </MDTypography>
    //     ),
    //     delete: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         Delete
    //       </MDTypography>
    //     ),
    //   },
    // ]
    rows: rows
  };
};