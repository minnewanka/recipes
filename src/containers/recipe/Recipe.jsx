import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const styles = theme => ({
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4
  }
})

const Recipe = props => {
  const {
    recipe,
    getRecipe,
    classes,
    location: {
      state: { recipeId }
    }
  } = props

  const { name, description, ingredients, preparation } = recipe || {}

  useEffect(() => {
    getRecipe(recipeId)
  }, [])

  return (
    <div>
      <div className={classes.heroUnit}>
        <div className={classes.heroContent}>
          <Typography
            component="h1"
            variant="h3"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            {name}
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="textSecondary"
            paragraph
          >
            {description}
          </Typography>
        </div>
      </div>
      <Grid container spacing={16} direction="row" justify="center">
        <Grid item sm={12} md={4} lg={3}>
          <Paper>
            <Typography variant="h6">Ingredients</Typography>
            <List>
              <ListItem>
                <Grid
                  container
                  spacing={16}
                  direction="column"
                  justify="space-between"
                >
                  {ingredients &&
                    ingredients.map(ingredient => (
                      <Grid key={ingredient} item>
                        <Typography variant="subtitle1">
                          {ingredient}
                        </Typography>
                      </Grid>
                    ))}
                </Grid>
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item sm={12} md={8} lg={8}>
          <Paper>
            <Typography variant="h6">Preparation</Typography>
            <List>
              <ListItem>
                <Grid
                  container
                  spacing={16}
                  direction="column"
                  justify="space-between"
                >
                  {preparation &&
                    preparation.map(preparationStep => (
                      <Grid key={preparationStep} item>
                        <Typography variant="subtitle1">
                          {preparationStep}
                        </Typography>
                      </Grid>
                    ))}
                </Grid>
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(Recipe)
