import React from 'react'
import './RecipeCard.scss'

const RecipeCard = ({ name, description }) => {
  return (
    <div className='RecipeCard'>
      <div className='card'>
        <div className='Image'>
          <div className='view-recipe'>VOIR LA RECETTE</div>
        </div>

        <div className='Text'>
          <h4>
            <b>{name}</b>
          </h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard
