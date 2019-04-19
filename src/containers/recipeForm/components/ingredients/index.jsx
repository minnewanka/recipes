import React from 'react'
import IngredientList from './IngredientList'
import AddIngredientItem from './AddIngredientItem'
import { useInputValue } from './hooks/form'
import { useIngredients } from './hooks/ingredient'

const Ingredients = props => {
  const { inputValue, changeInput, clearInput, keyInput } = useInputValue()
  const {
    ingredients,
    addIngredient,
    checkIngredient,
    removeIngredient
  } = props

  const clearInputAndAddIngrendient = () => {
    clearInput()
    addIngredient(inputValue)
  }

  return (
    <React.Fragment>
      <AddIngredientItem
        inputValue={inputValue}
        onInputChange={changeInput}
        onButtonClick={clearInputAndAddIngrendient}
        onInputKeyPress={event => keyInput(event, clearInputAndAddIngrendient)}
      />
      <IngredientList
        items={ingredients}
        onItemCheck={idx => checkIngredient(idx)}
        onItemRemove={idx => removeIngredient(idx)}
      />
    </React.Fragment>
  )
}

export default Ingredients
