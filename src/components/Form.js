import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      name: "",
      description: "",
      instructions: "",
      allIngredients: [],
      newIngredient: {
        name: "",
        quantity: ""
      }

    }
  }

  handleNameChange = (event) => {
    const newName = event.target.value
    this.setState({
      name: newName
    }, () => console.log(this.state))
  }

  handleDescChange = (event) => {
    const newDesc = event.target.value
    this.setState({
      description: newDesc
    }, () => console.log(this.state))
  }

  handleInsChange = (event) => {
    const newIns = event.target.value
    this.setState({
      instructions: newIns
    }, () => console.log(this.state))
  }

  handleIngredInput = (event) => {
    let newInfo = event.target.value
    if (event.target.id === "ingred-name") {
      this.setState({ 
        newIngredient: {
          ...this.state.newIngredient,
          name: newInfo
        }
      })
    }

    if (event.target.id === "ingred-quantity"){
      this.setState({ 
        newIngredient: {
          ...this.state.newIngredient,
          quantity: newInfo
        }
      })
    }
  }

  handleAddIngredient = (e) => {
    e.preventDefault()
    document.getElementById('ingred-name').value = ""
    document.getElementById('ingred-quantity').value = ""
    this.setState({
      allIngredients: [...this.state.allIngredients, this.state.newIngredient]
    }, () => console.log(this.state.allIngredients))
    
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addNewCocktail(this.state.name, this.state.description, this.state.instructions, this.state.allIngredients, this.state.newIngredient)
  
  }


  render(){
    return (
      <form>
        <h3>Create a Cocktail</h3>

        <p>Name</p>
        <input onChange={this.handleNameChange} type="text"/>

        <p>Description</p>
        <input onChange={this.handleDescChange} type="text"/>

        <p>Instructions</p>
        <input onChange={this.handleInsChange} type="text"/>

        <h3>Proportions</h3>
        {this.state.allIngredients.map( ingred => {
          return <div className="container">
          <p>Ingredient Name<br/>
          <input value={ingred.name} type="text"/>
          </p>

          <p>Quantity<br/>
          <input value={ingred.quantity} type="text"/>
          </p>
        </div>
        })}
        <div onChange={this.handleIngredInput} className="container">
          <p>Ingredient Name<br/>
          <input id="ingred-name" type="text"/>
          </p>

          <p>Quantity<br/>
          <input id="ingred-quantity" type="text"/>
          </p>
        </div>
        

        <p><button onClick={this.handleAddIngredient}> + </button></p>

        <input onClick={this.handleSubmit} type="submit"/>
      </form>
    )
  }
}

export default Form
