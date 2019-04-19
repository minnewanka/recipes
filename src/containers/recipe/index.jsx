import React from 'react'
import Recipe from './Recipe'
import { Consumer } from '../../context'

const RecipeConsumer = props => {
  return (
    <Consumer>
      {({ currentRecipe, getCurrentRecipe }) => (
        <Recipe
          recipe={currentRecipe}
          getRecipe={getCurrentRecipe}
          {...props}
        />
      )}
    </Consumer>
  )
}

export default RecipeConsumer
