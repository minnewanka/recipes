import React, { Component } from 'react'
import Routes from '../common/components/Routing'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import theme from './theme'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className='App'>
          <Routes />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
