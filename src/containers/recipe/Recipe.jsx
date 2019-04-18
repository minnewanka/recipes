import React from 'react'

const Recipe = props => {
  const {
    location: {
      state: { name, description }
    }
  } = props
  return (
    <div>
      Recipe {name} {description}
    </div>
  )
}

export default Recipe
