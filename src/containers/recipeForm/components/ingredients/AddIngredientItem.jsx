import { Button, Grid, Paper, TextField } from '@material-ui/core'
import React, { memo } from 'react'

const AddIngredientItem = memo(props => (
  <Paper style={{ margin: 16, padding: 16 }}>
    <Grid container>
      <Grid xs={10} md={9} item style={{ paddingRight: 16 }}>
        <TextField
          placeholder="Add Ingredient here"
          value={props.inputValue}
          onChange={props.onInputChange}
          onKeyPress={props.onInputKeyPress}
          fullWidth
        />
      </Grid>
      <Grid xs={2} md={3} item>
        <Button
          fullWidth
          color="primary"
          variant="contained"
          onClick={props.onButtonClick}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  </Paper>
))

export default AddIngredientItem
