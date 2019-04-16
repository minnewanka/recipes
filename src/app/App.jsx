import React, { Component } from 'react'
import './App.scss'
import Routes from '../common/components/routing/routing'
import NavBar from '../common/components/navBar/NavBar'
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
