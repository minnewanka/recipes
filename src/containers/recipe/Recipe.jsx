import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

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
            component='h1'
            variant='h3'
            align='center'
            color='textPrimary'
            gutterBottom
          >
            {name}
          </Typography>
          <Typography
            variant='h6'
            align='center'
            color='textSecondary'
            paragraph
          >
            {description}
          </Typography>
        </div>
      </div>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item sm={12} md={4} lg={3}>
          <div>ingredients</div>
        </Grid>
        <Grid item sm={12} md={8} lg={8}>
          <div>Preparation</div>
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(Recipe)
