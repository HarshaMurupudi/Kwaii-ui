import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import variables from './variables';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: variables.color.blue,
    },
    secondary: {
      main: green[500],
    },
  },
});

export default theme;