import {
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from '@material-ui/core'
import Delete from '@material-ui/icons/Delete'
import React, { memo } from 'react'

const PreparationStep = memo(props => (
  <ListItem divider={props.divider}>
    <ListItemText primary={props.stepNumber + '. ' + props.text} />
    <ListItemSecondaryAction>
      <IconButton
        aria-label="Delete PreparationStep"
        onClick={props.onButtonClick}
      >
        <Delete />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
))

export default PreparationStep
