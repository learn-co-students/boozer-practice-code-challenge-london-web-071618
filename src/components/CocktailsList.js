import React, { Component } from 'react'
import Cocktail from './Cocktail'

class CocktailsList extends Component {
  render(){
    return (
      <div id="cocktail-list">
        {this.props.allCocktails.map(cocktail => <Cocktail chooseCocktail={this.props.chooseCocktail} cocktail={cocktail}/>)}
        
      </div>
    )
  }
}

export default CocktailsList
