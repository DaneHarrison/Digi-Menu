import '../style/typeSelector.css'
import React from 'react'

export default class TypeSelector extends React.Component {
    search() {
        alert('lol')
        document.getElementById('searchBox').value = '';
    }

    render() {
        return (
            <div className='TypeSelector'>
                <button>Virgin</button>
                <button>Whiskey</button>
                <button>Wine</button>
                <button>Rum</button>
                <button>Vodka</button>
                <button>Tequila</button>
                <button>Gin</button>
                <button>Brandy</button>
                <button>infused</button>

                <div className='Holder'>
                    <input type="text" id='searchBox' className='Hidden' onSubmit={this.search}/>
                    <button onClick={this.search} class='Hidden'></button>
                </div>
            </div>
        )
    }
}
