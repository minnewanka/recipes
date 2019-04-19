import React from 'react'
import Home from './Home'
import { Consumer } from '../../context'

const HomeConsumer = props => {
  return (
    <Consumer>
      {({ recipes, getRecipes }) => (
        <Home recipes={recipes} getRecipes={getRecipes} {...props} />
      )}
    </Consumer>
  )
}

export default HomeConsumer
