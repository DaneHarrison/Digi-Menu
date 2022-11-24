import '../style/bottle.css'
import React from 'react'

export default class Bottle extends React.Component {
    render() {
        return(
            <button onClick={() => this.props.select(this.props.bottle.id)} className="BottleBtn">
                <img src={this.props.bottle.photo} className='BottlePic'/>
            </button>
        )
    }
}