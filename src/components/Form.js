import React, { Component } from 'react'

class Form extends Component {
  
  render () {
    const { handleChange } = this.props
    return (
      <form>
        <h3>Create a Cocktail</h3>

        <p>Name</p>
        <input
          type='text'
          name='cocktailName'
          onChange={handleChange}
        />

        <p>Description</p>
        <input
          type='text'
          name='cocktailDescription'
          onChange={handleChange}
        />

        <p>Instructions</p>
        <input
          type='text'
          name='instructions'
          onChange={handleChange}
        />

        <h3>Proportions</h3>
        <div className='container'>
          <p>Ingredient Name<br />
            <input
              type='text'
              name='ingredientName'
              onChange={handleChange}
            />
          </p>

          <p>Quantity<br />
            <input
              type='text'
              name='ingredientQuantity'
              onChange={handleChange }
            />
          </p>
        </div>

        <p><button> + </button></p>

        <input
          type='submit'
          onClick={(event)=>{event.preventDefault()
            this.props.submitNewCocktail()}}
        />
      </form>
    )
  }
}

export default Form
