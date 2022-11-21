import '../style/recipeCard.css'
import React from 'react'

export default class RecipeCard extends React.Component {
    render() {
        return (
            <button className='Card'>
                <img src={this.props.photo}></img>
                <p>{this.props.name}</p>
            </button>
        )
    }
}
