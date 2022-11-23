import '../style/typeSelector.css'
import Bottle from './bottle';
import React from 'react'

export default class TypeSelector extends React.Component {
    search() {
        document.getElementById('searchBox').value = '';
    }

    render() {
        return (
            <div className='TypeSelector'>
                <Bottle />
                <Bottle />
                <Bottle />
                <Bottle />
                <Bottle />
                <Bottle />
                <Bottle />
                <Bottle />
                <Bottle />
                <Bottle />
                <Bottle />
                
                <div className='Holder'>
                    <input type="text" id='searchBox' className='Hidden' onSubmit={this.search}/>
                    <button onClick={this.search} class='Hidden'></button>
                </div>
            </div>
        )
    }
}