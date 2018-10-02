import React from 'react'
import Cocktail from './Cocktail'

const CocktailDisplay = ({ cocktail, deselectCocktail }) => {
  return (
    <div
      id='cocktail-display' 
    >
      <h1>Cocktail Name: {cocktail.name}</h1>
      <h3>Cocktail Description: {cocktail.description}</h3>
      <p>Cocktail Instructions: {cocktail.instructions}</p>
      <button onClick={deselectCocktail}> Go Back!!!</button>
    </div>

  )
}

export default CocktailDisplay
