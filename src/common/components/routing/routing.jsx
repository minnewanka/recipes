import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from 'react-router-dom'
import Home from '../../../containers/home/Home'
import Recipe from '../../../containers/recipe/Recipe'
import RecipeCard from '../../../common/components//recipeCard/RecipeCard'
import Page404 from '../404/404'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/404' component={Page404} />
        <Redirect to='/404' />
      </Switch>
    </Router>
  )
}

export default Routes
