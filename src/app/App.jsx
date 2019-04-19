import React, { Component } from 'react'
import Routes from '../common/components/Routing'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import theme from './theme'
import { Provider } from '../context'
import Parse from 'parse'
import { getRecipes } from '../services/RecipeService'

Parse.initialize('7BAc82n24Kw4G4Nk8n89')
Parse.serverURL = 'http://localhost:1337/parse'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: [],
      getRecipes: this.getRecipes.bind(this)
    }
  }

  async getRecipes() {
    const recipes = await getRecipes()
    this.setState({ recipes: recipes })
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider value={this.state}>
          <div className="App">
            <Routes />
          </div>
        </Provider>
      </MuiThemeProvider>
    )
  }
}

export default App
