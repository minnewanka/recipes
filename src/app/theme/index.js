import {
  createMuiTheme
} from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import green from '@material-ui/core/colors/green';


export default createMuiTheme({
  palette: {
    primary: {
      main: '#FFA500',
      contrastText: '#fff',
    },
    secondary: green
  }
});