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
        />

        <p>Description</p>
        <input
          type='text'
          name='cocktailDescription'
          onChange={(event) => { handleChange(event.target.value) }}
        />

        <p>Instructions</p>
        <input
          type='text'
          name='instructions'
          onChange={(event) => { handleChange(event.target.value) }}
        />

        <h3>Proportions</h3>
        <div className='container'>
          <p>Ingredient Name<br />
            <input
              type='text'
              name='ingredientName'
              onChange={(event) => { handleChange(event.target.value) }}
            />
          </p>

          <p>Quantity<br />
            <input
              type='text'
              name='ingredientQuantity'
              onChange={(event) => { handleChange(event.target.value) }}
            />
          </p>
        </div>

        <p><button> + </button></p>

        <input type='submit' />
      </form>
    )
  }
}

export default Form
