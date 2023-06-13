import React from "react";
import {
  Typography,
  Box,
  Avatar,
  Hidden,
  AppBar,
  IconButton,
  Toolbar as MuiToolbar
} from "@material-ui/core";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import HomeIcon from "@material-ui/icons/Home";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import GroupIcon from "@material-ui/icons/Group";
import HelpIcon from "@material-ui/icons/Help";
import MenuIcon from "@material-ui/icons/Menu";
import { TrenderToolbar } from "./model";

export const MenuHeader = () => (
  <Box display={{ sm: "none", md: "flex" }} alignItems="center" ml={1}>
    <Avatar variant="rounded" style={{ marginRight: 12 }}>
      <AccountBalanceIcon />
    </Avatar>
    <Hidden only="md">
      <Typography variant="h5">Bank</Typography>
    </Hidden>
  </Box>
);

export const Toolbar: TrenderToolbar = (isMenuOpen, toggleMenu) => (
  <AppBar position="sticky" elevation={isMenuOpen ? 0 : 4}>
    <MuiToolbar>
      <Typography variant="h6">Bank</Typography>
      <IconButton
        edge="end"
        color="inherit"
        style={{ marginLeft: "auto" }}
        onClick={toggleMenu}
      >
        <MenuIcon />
      </IconButton>
    </MuiToolbar>
  </AppBar>
);

export const menuOptions = [
  {
    text: "Home",
    Icon: HomeIcon,
    linkTo: "/home"
  },
  {
    text: "Cards",
    Icon: CreditCardIcon,
    linkTo: "/cards"
  },
  {
    text: "Beneficiaries",
    Icon: GroupIcon,
    linkTo: "/beneficiaries"
  },
  {
    text: "FAQs",
    Icon: HelpIcon,
    linkTo: "/faq"
  },
  {
    text: "Home",
    Icon: HomeIcon,
    linkTo: "/dashboard"
  },
  {
    text: "Cards",
    Icon: CreditCardIcon,
    linkTo: "/cardss"
  },
  {
    text: "Beneficiaries",
    Icon: GroupIcon,
    linkTo: "/beneficiariess"
  },
  {
    text: "FAQs",
    Icon: HelpIcon,
    linkTo: "/faqs"
  }
];
