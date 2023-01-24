import { blue } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// TODO: bg colors out of the sx props

declare module "@mui/material/styles" {
  interface PaletteOptions {
    other: {
      lightGrey: string;
      secondary: string;
      neutralGrey: string;
      grey: string;
      black: string;
    };
  }
}

const borderRadius = 8;

export const fontFamily = ["Open Sans"].join(",");

const other = {
  lightGrey: "#F5F2EF",
  secondary: "#D5E6D7",
  neutralGrey: "#EFEFEF",
  grey: "#AABFAC",
  black: "#1C1C1C",
};

const appTheme = createTheme({
  shape: {
    borderRadius: borderRadius,
  },
  palette: {
    other: {
      lightGrey: other.lightGrey,
      secondary: other.secondary,
      neutralGrey: other.neutralGrey,
      grey: other.grey,
      black: other.black,
    },
  },
  typography: {
    // fontFamily, // Default font-family

    h1: {
      fontFamily,
      fontSize: "1.5em",
      fontWeight: 800,
      lineHeight: 1.3,
    },
    h2: {
      fontFamily,
      fontSize: "1em",
      fontWeight: 800,
      lineHeight: 1.3,
    },
    h3: {
      fontFamily,
      fontSize: "1.2em",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    body1: {
      fontFamily,
      fontSize: "1.0em",
      fontWeight: 400,
      lineHeight: 1.3,
    },
    body2: {
      fontFamily,
      fontSize: "0.7rem",
      fontWeight: 400,
      lineHeight: 1.3,
    },
    button: {
      fontFamily,
      fontSize: "1em",
      fontWeight: 400,
      lineHeight: 1.3,
    },
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          backgroundColor: other.secondary,
          border: 1,
          borderColor: other.secondary,
          borderRadius: borderRadius,
          "&:active, &:hover": {
            backgroundColor: other.grey,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&.MuiButtonBase-root": {
            backgroundColor: other.secondary,
            border: 1,
            borderColor: other.secondary,
            borderRadius: borderRadius,
            boxShadow: "none",
            "&:active, &:hover": {
              backgroundColor: other.grey,
            },
            "&:disabled": {
              backgroundColor: other.neutralGrey,
            },
            "&.MuiButton-containedPrimary": {
              backgroundColor: other.secondary,
            },
            "&.MuiButton-containedSecondary": {
              color: "white",
              "&.paypal": {
                backgroundColor: "#FFC439",
              },
              "&.applepay": {
                backgroundColor: other.black,
              },
              "&.ideal": {
                backgroundColor: "#FFDAE5",
              },
              "&.credit": {
                backgroundColor: "#2C2E2F",
              },
            },
          },
        },
      },
    },
  },
});

export default appTheme;
