import '../style/bottle.css'
import React from 'react'

export default class Bottle extends React.Component {
    render() {
        return(
            <button className="BottleBtn">
                <img src='./bottles/smallBottle.png' className='BottlePic' />
            </button>
        )
    }
}