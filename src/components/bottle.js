// ====================================================
// bottle.js
//
// Props:
// - bottle: JSON object {name: string, photo: string} of the bottle instance
// - select: a function() that swaps the current bottle to whichever was selected 
// - posi: a number representing the bottles position in the slider
//
// Purpose: Creates a bottle-like button
// ====================================================
import '../style/bottle.css'
import React from 'react'

export default class Bottle extends React.Component {
    componentDidMount() {
        if(this.props.posi == 0) {
            document.getElementById('bottle:0').classList.add('Selected');
        }
    }

    render() {
        return(
            <button onClick={this.props.select} className="BottleBtn">
                <img src={this.props.bottle.photo} className='BottlePic' id={'bottle:' + this.props.posi}/>
            </button>
        )
    }
}