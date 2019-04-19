import React, { useEffect } from 'react'
import RecipeCard from '../../common/components/RecipeCard'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

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

const Home = props => {
  const { recipes, classes, getRecipes } = props

  useEffect(() => {
    getRecipes()
  }, [])

  return (
    <div className={classNames(classes.layout, classes.cardGrid)}>
      <Grid container spacing={16}>
        {recipes.map((recipe, index) => (
          <Grid item key={`recipe${index}`} sm={6} md={4} lg={3}>
            <RecipeCard
              recipeId={recipe.recipeId}
              name={recipe.name}
              description={recipe.description}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default withStyles(styles)(Home)
