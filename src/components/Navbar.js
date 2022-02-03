import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

const Navbar = ({ name, color }) => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <IconButton size="large" edge="start">
          <MenuIcon />
        </IconButton>
        <Typography variant="h5">{name}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
