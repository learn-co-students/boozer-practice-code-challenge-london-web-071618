import React, { Component } from 'react'
import CocktailsList from './CocktailsList'
import CocktailDisplay from './CocktailDisplay'
import Form from './Form'

class CocktailsContainer extends Component {
  state={
    cocktails: [],
    selectedCocktail: undefined,
    cocktailName: '',
    cocktailDescription: '',
    instructions: '',
    ingredientName: '',
    ingredientQuantity: ''
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  selectCocktail =(cocktail) => {
    this.setState({ selectedCocktail: cocktail })
  }
  deselectCocktail = () => {
    this.setState({ selectedCocktail: undefined })
  }
  getCocktails = () => {
    return fetch('https://react-boozer-backend.herokuapp.com/api/v1/cocktails')
      .then(resp => resp.json())
      .then(cocktails => this.setState({ cocktails }))
  }
  componentDidMount () {
    this.getCocktails()
  }
  render () {
    const { cocktails, selectedCocktail, cocktailName, cocktailDescription, instructions, ingredientName, ingredientQuantity } = this.state
    const filteredCocktails = this.state.cocktails.filter(cocktail =>{
      return cocktail.name.toLowerCase().includes(this.state.cocktailName.toLowerCase())
    })
    return (
      <div className='container'>
        {
          selectedCocktail
            ? <CocktailDisplay
              cocktail={selectedCocktail}
              deselectCocktail={this.deselectCocktail}
            />
            : <CocktailsList
              cocktails={filteredCocktails}
              selectCocktail={this.selectCocktail}
            />
        }
        <Form
          cocktailName={cocktailName}
          cocktailDescription={cocktailDescription}
          instructions={instructions}
          ingredientName={ingredientName}
          ingredientQuantity={ingredientQuantity}
          handleChange={this.handleChange}
        />
      </div>
    )
  }
}

export default CocktailsContainer
