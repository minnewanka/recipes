import { useState } from 'react'

export const useIngredients = (initialValue = []) => {
  const [ingredients, setIngredients] = useState(initialValue)
  return {
    ingredients,
    addIngredient: text => {
      if (text !== '') {
        setIngredients(
          ingredients.concat({
            text,
            checked: false
          })
        )
      }
    },
    checkIngredient: index => {
      setIngredients(
        ingredients.map((Ingredient, idx) => {
          if (index === idx) {
            Ingredient.checked = !Ingredient.checked
          }
          return Ingredient
        })
      )
    },
    removeIngredient(id) {
      setIngredients(ingredients.filter((ingredient, index) => id !== index))
    }
  }
}
