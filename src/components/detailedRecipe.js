import '../style/detailedRecipe.css'
import DrinkSlider from './drinkSlider'
import React from 'react'

export default class DetailedRecipe extends React.Component {
    render() {
        return (
            <div className='DetailedRecipe'>
                <img src='./favicon.ico' className='Photo'></img>
                <DrinkSlider />
                <p className='TopDesc'>name</p>
                <p className='BtmDesc'>ingredients</p>
            </div>
        )
    }
}

//checkbox
//name
//photo
//ingredients
//drink slider