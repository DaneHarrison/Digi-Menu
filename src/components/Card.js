import React from 'react'
import DrinkSlider from './DrinkSlider';

export default class DrinkView extends React.Component {
    constructor(props) {
        super(props);

        //alcohol percentage and then pass down into ingredients
    }

    render() {
        return (
            <div>DrinkView
                <img></img>
                <p>Drink</p>
                <DrinkSlider/>
                <p>Ingredients</p>
            </div>
        )
    }
}
