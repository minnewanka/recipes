import React from 'react'
import PreparationList from './PreparationList'
import AddPreparationStep from './AddPreparationStep'
import { useInputValue } from './hooks/form'

const Preparation = props => {
  const { inputValue, changeInput, clearInput, keyInput } = useInputValue()
  const { preparation, addPreparationStep, removePreparationStep } = props

  const clearInputAndAddPreparationStep = () => {
    clearInput()
    addPreparationStep(inputValue)
  }

  return (
    <React.Fragment>
      <AddPreparationStep
        inputValue={inputValue}
        onInputChange={changeInput}
        onButtonClick={clearInputAndAddPreparationStep}
        onInputKeyPress={event =>
          keyInput(event, clearInputAndAddPreparationStep)
        }
      />
      <PreparationList
        items={preparation}
        onItemRemove={idx => removePreparationStep(idx)}
      />
    </React.Fragment>
  )
}

export default Preparation
