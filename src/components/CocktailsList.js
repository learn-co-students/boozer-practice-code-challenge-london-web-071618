import React, { Component } from 'react'
import Cocktail from './Cocktail'

class CocktailsList extends Component {
  render () {
    const { cocktails, selectCocktail } = this.props
    return (
      <div id='cocktail-list'>
        {
          cocktails.map(cocktail =>
            <Cocktail
              cocktail={cocktail}
              handleClick={() => selectCocktail(cocktail)}
            />
          )
        }
      </div>
    )
  }
}

export default CocktailsList
