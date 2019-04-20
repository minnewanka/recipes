import { List, Paper } from '@material-ui/core'
import React, { memo } from 'react'
import PreparationStep from './PreparationStep'

const PreparationList = memo(props => (
  <>
    {props.items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List style={{ overflow: 'scroll' }}>
          {props.items.map((preparationStep, index) => (
            <PreparationStep
              {...preparationStep}
              key={`preparationStep.${index}`}
              divider={index !== props.items.length - 1}
              onButtonClick={() => props.onItemRemove(index)}
              onCheckBoxToggle={() => props.onItemCheck(index)}
            />
          ))}
        </List>
      </Paper>
    )}
  </>
))

export default PreparationList
