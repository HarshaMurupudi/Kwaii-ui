import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import variables from './variables';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: variables.colors.blue,
    },
    secondary: {
      main: variables.colors.orange,
    },
  },
});

export default theme;