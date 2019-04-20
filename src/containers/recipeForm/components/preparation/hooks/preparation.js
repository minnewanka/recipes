import { useState } from 'react'

export const usePreparation = (initialValue = []) => {
  const [preparation, setPreparation] = useState(initialValue)
  return {
    preparation,
    addPreparationStep: text => {
      if (text !== '') {
        setPreparation(
          preparation.concat({
            text,
            checked: false
          })
        )
      }
    },
    removePreparationStep(id) {
      setPreparation(
        preparation.filter((preparationStep, index) => id !== index)
      )
    }
  }
}
