import React from 'react'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const styles = {
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    '&:hover': {
      cursor: 'pointer'
    }
  }
}

const NavBar = props => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography
            variant='h6'
            color='inherit'
            className={classes.title}
            onClick={() => {
              props.history.push('/')
            }}
          >
            Recipe.
          </Typography>
          <Button
            color='inherit'
            onClick={() => {
              props.history.push('/404')
            }}
          >
            Add Recipe
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default withRouter(withStyles(styles)(NavBar))
