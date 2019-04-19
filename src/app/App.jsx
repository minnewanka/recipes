import React, { Component } from 'react'
import Routes from '../common/components/Routing'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import theme from './theme'
import { Provider } from '../context'
import Parse from 'parse'
import { getRecipes, getRecipe } from '../services/RecipeService'

Parse.initialize('7BAc82n24Kw4G4Nk8n89')
Parse.serverURL = 'http://localhost:1337/parse'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: [],
      currentRecipe: [],
      getRecipes: this.getRecipes.bind(this),
      getCurrentRecipe: this.getCurrentRecipe.bind(this)
    }
  }

  async getRecipes() {
    const recipes = await getRecipes()
    this.setState({ recipes: recipes })
  }

  async getCurrentRecipe(id) {
    const currentRecipe = await getRecipe(id)
    console.log(currentRecipe)
    this.setState({ currentRecipe: currentRecipe })
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
