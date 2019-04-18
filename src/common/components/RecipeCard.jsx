import React from 'react'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 200
  },
  cardContent: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  }
})

const RecipeCard = ({ name, description, classes, history }) => {
  const handleCardActionArea = () => {
    history.push({ pathname: '/recipe', state: { name, description } })
  }
  return (
    <Card className={classes.card}>
      <CardActionArea onClick={handleCardActionArea}>
        <CardMedia
          className={classes.media}
          image='/static/images/cards/contemplative-reptile.jpg'
          title={name}
        />
      </CardActionArea>
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant='h5' component='h2' color='inherit'>
          {name}
        </Typography>
        <Typography component='p' color='inherit'>
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default withRouter(withStyles(styles)(RecipeCard))
