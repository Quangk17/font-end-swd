/* eslint-disable react/prop-types */
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
// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images
import LogoAsana from "assets/images/small-logos/logo-asana.svg";
import logoGithub from "assets/images/small-logos/github.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";

import { getCourts } from "network/network";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function data() {
  const [courts, setCourts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getCourts()
      .then((res) => {
        console.log(res.data.data);
        setCourts(res.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  const Progress = ({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}
      </MDTypography>
    </MDBox>
  );

  const rows = courts.map((court) => ({
    project: <Project image={LogoAsana} name={court.name} />,
    budget: (
      <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
        $2,500
      </MDTypography>
    ),
    status: (
      <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        {court.status ? "FREE" : "OCCUPIED"}
      </MDTypography>
    ),
    completion: <Progress color="info" value={1} />,
    action: (
      <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Update
      </MDTypography>
    ),
    delete: (
      <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Delete
      </MDTypography>
    ),
  }));

  return {
    columns: [
      { Header: "Court name", accessor: "project", width: "30%", align: "left" },
      { Header: "budget", accessor: "budget", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "slot", accessor: "completion", align: "center" },
      { Header: "Update", accessor: "action", align: "center" },
      { Header: "Delete", accessor: "delete", align: "center" },
    ],

    // rows: [
    //   {
    //     project: <Project image={LogoAsana} name="Asana" />,
    //     budget: (
    //       <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
    //         $2,500
    //       </MDTypography>
    //     ),
    //     status: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         working
    //       </MDTypography>
    //     ),
    //     completion: <Progress color="info" value={60} />,
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
    // ],
    rows: rows,
  };
}
