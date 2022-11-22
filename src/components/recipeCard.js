import '../style/recipeCard.css'
import React from 'react'

export default class RecipeCard extends React.Component {
    render() {
        return (
            <button onClick={() => {this.props.showRecipe('adad')}} className='Card'>                
                <img src={this.props.photo} className='Photo'></img>
                <p className='RecipeName'>{this.props.name}</p>
            </button>
        )
    }
}
