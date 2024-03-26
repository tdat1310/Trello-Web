import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight: "60px",
    boardBarHeight: "70px",
  },
  colorSchemes: {
    light: {},
    dark: {},
  },
  components: {
    // Name of the component
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "*::-webkit-scrollbar": {
            width: "6px",
            height: "6px",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "#dcdde1",
            borderRadius: "8px",
          },
          "*::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "white",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          border: "none",
          '&:hover': {
            color: 'white'
          },
          borderWidth: '0.5px'
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
        }
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
          "& fieldset": {
            borderWidth: "0.5px !important",
          },
        },
      },
    },
  },
  // ...other properties
});

export default theme;
