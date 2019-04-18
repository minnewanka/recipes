import {
  createMuiTheme
} from '@material-ui/core/styles'

export default createMuiTheme({
  palette: {
    primary: {
      main: '#FFA500',
      contrastText: '#fff',
    },
    secondary: {
      main: '#86BBD8',
      contrastText: '#fff',
    },
  },
  typography: {
    useNextVariants: true,
  }
})