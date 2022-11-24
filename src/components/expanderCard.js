import '../style/expanderCard.css'
import React from 'react'

export default class ExpanderCard extends React.Component {
    render() {
        return (
            <div className='ExpanderCard'>
                <img src='./favicon.ico' className='ExpanderPhoto'></img>

                <div>
                    {this.props.drink.ingredients.map((ingredient, i) => { return <p key={i} className='ExpanderIngredient'> {ingredient} </p> })}
                </div>
            </div>
        )
    }
}