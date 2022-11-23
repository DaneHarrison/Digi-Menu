import '../style/bottle.css'
import React from 'react'

export default class Bottle extends React.Component {
    render() {
        return(
            <button className="BottleBtn">
                <img src={this.props.bottle.photo} className='BottlePic' />
            </button>
        )
    }
}