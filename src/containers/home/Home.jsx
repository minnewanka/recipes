import React from 'react'
import './Home.scss'
import RecipeCard from '../../common/components/recipeCard/RecipeCard'

const Home = () => {
  return (
    <div className='Home'>
      <div className='Recipes'>
        <RecipeCard name='Khao Man Gai' description='thai chicken' />
        <RecipeCard name='Khao Man Gai' description='thai chicken' />
        <RecipeCard name='Khao Man Gai' description='thai chicken' />
        <RecipeCard name='Khao Man Gai' description='thai chicken' />
      </div>
    </div>
  )
}

export default Home
