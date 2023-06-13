import React from "react";

export interface IsideMenuOption {
  text: string;
  Icon?: React.FunctionComponent;
  linkTo: string;
}

export type TrenderToolbar = (
  isMenuOpen: boolean,
  toggleMenu: () => void
) => React.ReactNode;
