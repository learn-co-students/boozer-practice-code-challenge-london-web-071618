import React from 'react'

const CocktailDisplay = ({displayedCocktail}) => {
  return (
    <div id="cocktail-display">
      <h1>{displayedCocktail.name}</h1>
      <h3>{displayedCocktail.description}</h3>
      <p>{displayedCocktail.instructions}</p>
      <h2>Ingredients</h2>
      {displayedCocktail.ingredients.map(ingred => {
        return <li>{ingred.name} - {ingred.amount}</li>
      })}
    </div>
  )
}

export default CocktailDisplay
