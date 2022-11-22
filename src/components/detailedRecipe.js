import '../style/detailedRecipe.css'
import DrinkSlider from './drinkSlider'
import React from 'react'

export default class DetailedRecipe extends React.Component {
    render() {
        return (
            <div className='DetailedRecipe'>
                <img src='./favicon.ico' className='Photo'></img>
                <DrinkSlider />

                <div className='DrinkDetails'>
                    <div className='Selector'>
                        <label for='select'>Select</label>
                        <input type="checkbox" id='select' name='select'/>
                    </div>

                    <h1>Virgin Mojito</h1>

                    <div className='Hide'>
                        <p className='Ingredient'>- ingredients</p>
                        <p className='Ingredient'>- ingredients</p>
                        <p className='Ingredient'>- ingredients</p>
                        <p className='Ingredient'>- ingredients</p>
                        <p className='Ingredient'>- ingredients</p>
                        <p className='Ingredient'>- ingredients</p>
                        <p className='Ingredient'>- ingredients</p>
                        <p className='Ingredient'>- ingredients</p>
                        <p className='Ingredient'>- ingredients</p>
                        <p className='Ingredient'>- ingredients</p>
                        <p className='Ingredient'>- ingredients</p>
                        <p className='Ingredient'>- ingredients</p>
                        <p className='Ingredient'>- ingredients</p>
                        <p className='Ingredient'>- ingredients</p>
                        <p className='Ingredient'>- ingredients</p>
                        <p className='Ingredient'>- ingredients</p>
                        <p className='Ingredient'>- ingredients</p>
                        <p className='Ingredient'>- ingredients</p>
                        <p className='Ingredient'>- ingredients</p>
                        <p className='Ingredient'>- ingredients</p>
                        <p className='Ingredient'>- ingredients</p>
                        <p className='Ingredient'>- ingredients</p>
                    </div>
                </div>
            </div>
        )
    }
}

//checkbox
//name
//photo
//ingredients
//drink slider