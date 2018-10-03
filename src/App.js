import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import CocktailsContainer from './components/CocktailsContainer'

class App extends Component {
  // state = {
  //   ingredients: [],
  //   proportions: []
  // }

  // getIngredients = () => {
  //   return fetch('https://react-boozer-backend.herokuapp.com/api/v1/ingredients')
  //     .then(resp => resp.json())
  //     .then(data => ingredients => this.setState({ ingredients }))
  // }
  // getProprtions = () => {
  //   return fetch('https://react-boozer-backend.herokuapp.com/api/v1/proportions')
  //     .then(resp => resp.json())
  //     .then(data => proportions => this.setState({ proportions }))
  // }
  
  render () {
    return (
      <CocktailsContainer />
    )
  }
}

export default App
