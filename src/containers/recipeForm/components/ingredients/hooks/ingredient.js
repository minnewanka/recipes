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
    removeIngredient(id) {
      setIngredients(ingredients.filter((ingredient, index) => id !== index))
    }
  }
}
