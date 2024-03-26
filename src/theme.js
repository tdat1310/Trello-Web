import { teal, deepOrange, cyan, orange } from "@mui/material/colors";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight: "60px",
    boardBarHeight: '70px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange,
      },
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange,
      },
    },
  },
  components: {
    // Name of the component
    MuiCssBaseline:{
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '6px',
            height: '6px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#bdc3c7',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#00b894'
          },
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({theme}) => ({
            color: theme.palette.primary.main,
            fontSize: '0.875rem'
        })
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root:  ({theme}) =>
           ({
            color: theme.palette.primary.main,
            fontSize: '0.875rem',
            '.MuiOutlinedInput-notcheOutline' :{
              borderColor: theme.palette.primary.light
            },
            '&:hover':{
              color: theme.palette.primary.main
            },
            '& fieldset': {
              borderWidth: '1px !important'
            }
          }) 
      }
    }
  },
  // ...other properties
});

export default theme;
