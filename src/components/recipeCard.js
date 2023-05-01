// ====================================================
// recipeCard.js
//
// Props:
// - photo: string path of the drink's photo
// - name: name of the drink's
// - showRecipe: function() that toggles the detailed view of a drink 
//
// Purpose: creates a card layout to display available drinks
// ====================================================
import '../style/recipeCard.css'
import React from 'react'

export default class RecipeCard extends React.Component {
    render() {
        return (
            <button onClick={this.props.showRecipe} className='Card'>                
                <img src={this.props.photo} className='Photo'></img>
                <p className='RecipeName'>{this.props.name}</p>
            </button>
        )
    }
}