import React, { Component } from 'react'
import Routes from '../common/components/Routing'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import theme from './theme'
import { Provider } from '../context'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: [
        {
          name: 'Recipe1',
          description: 'Description1',
          ingredients: [
            { name: 'Ingredient1', quantity: 1 },
            { name: 'Ingredient2', quantity: 1 },
            { name: 'Ingredient3', quantity: 1 },
            { name: 'Ingredient4', quantity: 1 }
          ]
        },
        { name: 'Recipe2', description: 'Description2' },
        { name: 'Recipe3', description: 'Description3' },
        { name: 'Recipe4', description: 'Description4' },
        { name: 'Recipe5', description: 'Description5' }
      ]
    }
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider value={this.state}>
          <div className='App'>
            <Routes />
          </div>
        </Provider>
      </MuiThemeProvider>
    )
  }
}

export default App
