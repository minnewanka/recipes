import React from 'react'
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
    classes,
    location: {
      state: { name, description }
    }
  } = props
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
      <Grid
        container
        spacing={16}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item sm={12} md={4} lg={3}>
          <Paper>
            <Typography variant="h6">Ingredients</Typography>
            <List>
              <ListItem>
                <Grid
                  container
                  spacing={16}
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography variant="subtitle1">Foo</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1" color="textSecondary">
                      Bar
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item sm={12} md={8} lg={8}>
          <Paper>
            <Typography variant="h6">Preparation</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(Recipe)
