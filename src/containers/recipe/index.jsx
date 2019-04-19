import React from 'react'
import Recipe from './Recipe'
import { Consumer } from '../../context'

const RecipeConsumer = props => {
  return (
    <Consumer>
      {({ recipes }) => <Recipe recipes={recipes} {...props} />}
    </Consumer>
  )
}

export default RecipeConsumer
