import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from 'react-router-dom'
import Home from '../../containers/home/'
import Recipe from '../../containers/recipe/Recipe'
import RecipeForm from '../../containers/recipeForm/RecipeForm'
import Page404 from './404'
import NavBar from './NavBar'

const Routes = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recipe" component={Recipe} />
        <Route exact path="/recipeForm" component={RecipeForm} />
        <Route exact path="/404" component={Page404} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  )
}

export default Routes
