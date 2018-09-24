import React, { Component } from 'react'
import CocktailsList from './CocktailsList'
import CocktailDisplay from './CocktailDisplay'
import Form from './Form'

class CocktailsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allCocktails: [],
      allIngredients: [],
      allAmounts: [],
      selectedCocktail: {
        name: "",
        description: "",
        instructions: "",
        ingredients: []
      }
    }
  }

  componentDidMount() {
    fetch('https://react-boozer-backend.herokuapp.com/api/v1/cocktails')
    .then(res => res.json())
    .then(cocktails => this.setState({allCocktails: cocktails}))

    fetch('https://react-boozer-backend.herokuapp.com/api/v1/proportions')
    .then(res => res.json())
    .then(amounts => this.setState({allAmounts: amounts}))

    fetch('https://react-boozer-backend.herokuapp.com/api/v1/ingredients')
    .then(res => res.json())
    .then(ingreds => this.setState({allIngredients: ingreds}))
  }

  chooseCocktail = (chosenCocktail) => {
    let cocktailProportions = this.state.allAmounts.filter(amount => amount.cocktail_id === chosenCocktail.id)
    let cocktailIngredients = []
    let ingredientNames = cocktailProportions.map(ia => {
      return this.state.allIngredients.find(ingred => ingred.id === ia.ingredient_id).name
    })
    let ingredientsAmounts = cocktailProportions.map(prop => prop.amount)
    for (let i=0; i<ingredientsAmounts.length; i++) {
      cocktailIngredients[i] = {name: ingredientNames[i], amount: ingredientsAmounts[i]}
    }
    this.setState({
      selectedCocktail: {
        name: chosenCocktail.name,
        description: chosenCocktail.description,
        instructions: chosenCocktail.instructions,
        ingredients: cocktailIngredients
      }
    }, () => console.log(this.state.selectedCocktail))
  }

  addNewCocktail = (newName, newDesc, newInstrucs, newIngreds, newIngred) => {
    const newCocktail = {
      name: newName,
      description: newDesc,
      instructions: newInstrucs,
      ingredients: [...newIngreds, newIngred]
    }
    this.setState({
      allCocktails: [...this.state.allCocktails, newCocktail]
    }, () => console.log(this.state.allCocktails))
  }

  render(){
    return (
      <div className="container">
      <CocktailsList chooseCocktail={this.chooseCocktail} allCocktails={this.state.allCocktails}/>
      <CocktailDisplay displayedCocktail={this.state.selectedCocktail} allIngreds={this.state.allIngredients} allAmounts={this.state.allAmounts}/>
      <Form addNewCocktail={this.addNewCocktail}/>
      </div>
    )
  }
}

export default CocktailsContainer
