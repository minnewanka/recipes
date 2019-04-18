import React, { Component } from 'react'
import Routes from '../common/components/Routing'
import NavBar from '../common/components/NavBar'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import theme from './theme'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className='App'>
          <NavBar />
          <Routes />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
