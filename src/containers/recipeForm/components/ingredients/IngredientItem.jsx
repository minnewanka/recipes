import {
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from '@material-ui/core'
import Delete from '@material-ui/icons/Delete'
import React, { memo } from 'react'

const IngredientItem = memo(props => (
  <ListItem divider={props.divider}>
    <ListItemText primary={props.text} />
    <ListItemSecondaryAction>
      <IconButton
        aria-label="Delete IngredientItem"
        onClick={props.onButtonClick}
      >
        <Delete />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
))

export default IngredientItem
