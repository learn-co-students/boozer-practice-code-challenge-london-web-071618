import React from 'react'

const Cocktail = ({ cocktail, selectCocktail, handleClick }) => {
  return (
    <div className='cocktail-details'>
      <li onClick={handleClick}> {cocktail.name}</li>
    </div>
  )
}

export default Cocktail
