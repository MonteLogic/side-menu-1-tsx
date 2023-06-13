import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    sideMenu?: {
      width?: React.CSSProperties["width"];
      widthMd?: React.CSSProperties["width"];
      bgColor?: React.CSSProperties["color"];
      color?: React.CSSProperties["color"];
    };
  }
  interface ThemeOptions {
    sideMenu?: {
      width?: React.CSSProperties["width"];
      widthMd?: React.CSSProperties["width"];
      bgColor?: React.CSSProperties["color"];
      color?: React.CSSProperties["color"];
    };
  }
}

export default createMuiTheme({
  breakpoints: {
    values: {
      xl: 1440,
      lg: 1024,
      md: 768,
      sm: 375,
      xs: 0
    }
  },
  sideMenu: {
    width: 222
  }
});
