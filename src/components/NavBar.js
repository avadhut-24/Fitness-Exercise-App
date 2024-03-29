import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import logo from "../assets/images/Logo.png";
import { red } from "@mui/material/colors";

const NavBar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "10px", xs: "5px" },
      }}
    >
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          style={{
            width: "48px",
            height: "48px",
            margin: "0 20px",
          }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "red",
            borderBottom: "3px solid black",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{
            textDecoration: "none",
            color: "red",
          }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default NavBar;
