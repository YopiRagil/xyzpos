import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#da2c43",
      secondary: "white",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
