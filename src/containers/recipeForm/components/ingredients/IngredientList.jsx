import { List, Paper } from '@material-ui/core'
import React, { memo } from 'react'
import IngredientItem from './IngredientItem'

const IngredientList = memo(props => (
  <>
    {props.items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List style={{ overflow: 'scroll' }}>
          {props.items.map((ingredientItem, index) => (
            <IngredientItem
              {...ingredientItem}
              key={`IngredientItem.${index}`}
              divider={index !== props.items.length - 1}
              onButtonClick={() => props.onItemRemove(index)}
            />
          ))}
        </List>
      </Paper>
    )}
  </>
))

export default IngredientList
