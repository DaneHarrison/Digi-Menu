// ====================================================
// expanderCard.js
//
// Props:
// - JSON object (see menu.json under assets) of a selected drink
//
// Purpose: Creates a dynamically sizing scrollable card (left and right to create and remove instances [1, 4])
// ====================================================
import '../style/expanderCard.css'
import React from 'react'

export default class ExpanderCard extends React.Component {
    render() {
        return (
            <div className='ExpanderCard'>
                <img src={this.props.drink.photo} className='ExpanderPhoto'></img>

                <div>
                    {this.props.drink.ingredients.map((ingredient, i) => { 
                        return ( <p key={i} className='ExpanderIngredient'> {ingredient} </p> )
                    })}
                </div>
            </div>
        )
    }
}