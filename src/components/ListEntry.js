import React from 'react'

export default class ListEntry extends React.Component {
    select() {
            
    }
    //this needs state n props

    render() {
        return (
            <div onClick={this.select}>
                <img></img>
                <p>This is a thing</p>
            </div>
        )
    }
}
