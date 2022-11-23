import '../style/typeSelector.css'
import bottles from '../assets/bottles.json'
import Bottle from './bottle';
import React from 'react'

export default class TypeSelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bottles: bottles
        }
    }

    search() {
        document.getElementById('searchBox').value = '';
    }

    render() {
        return (
            <div className='TypeSelector'>
                <Bottle bottle={this.state.bottles[0]} />
                <Bottle bottle={this.state.bottles[1]} />
                <Bottle bottle={this.state.bottles[2]} />
                <Bottle bottle={this.state.bottles[3]} />
                <Bottle bottle={this.state.bottles[4]} />
                <Bottle bottle={this.state.bottles[5]} />
                <Bottle bottle={this.state.bottles[6]} />
                <Bottle bottle={this.state.bottles[7]} />
                <Bottle bottle={this.state.bottles[8]} />
                <Bottle bottle={this.state.bottles[9]} />
                <Bottle bottle={this.state.bottles[10]} />
                <Bottle bottle={this.state.bottles[11]} />
                
                <div className='Holder'>
                    <input type="text" id='searchBox' className='Hidden' onSubmit={this.search}/>
                    <button onClick={this.search} class='Hidden'></button>
                </div>
            </div>
        )
    }
}