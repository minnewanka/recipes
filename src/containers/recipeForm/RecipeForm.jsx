import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { withRouter } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import Button from '@material-ui/core/Button'
import { createRecipe } from '../../services/RecipeService'
import Typography from '@material-ui/core/Typography'
import Ingredients from './components/ingredients/'
import Preparation from './components/preparation/'
import { useIngredients } from './components/ingredients/hooks/ingredient'
import { usePreparation } from './components/preparation/hooks/preparation'

//TODO factoriser style
const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  }
})

const RecipeForm = props => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const {
    ingredients,
    addIngredient,
    checkIngredient,
    removeIngredient
  } = useIngredients()
  const {
    preparation,
    addPreparationStep,
    removePreparationStep
  } = usePreparation()

  const { classes, history } = props

  const handleSbmit = () => {
    createRecipe(name, description, ingredients)
    history.push({ pathname: '/recipe', state: { name, description } })
  }

  return (
    <div className={classNames(classes.layout, classes.cardGrid)}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="Name"
            onChange={e => setName(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="description"
            name="description"
            label="Description"
            onChange={e => setDescription(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item align="right" xs={12} sm={12}>
          <Typography
            component="h4"
            variant="h4"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Ingredients
          </Typography>
          <Ingredients
            ingredients={ingredients}
            addIngredient={addIngredient}
            checkIngredient={checkIngredient}
            removeIngredient={removeIngredient}
          />
          <Preparation
            preparation={preparation}
            addPreparationStep={addPreparationStep}
            removePreparationStep={removePreparationStep}
          />
        </Grid>
        <Grid item align="right" xs={12} sm={12}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleSbmit}
          >
            Create Recipe
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default withRouter(withStyles(styles)(RecipeForm))
