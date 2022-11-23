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
                {this.state.bottles
                    ? this.state.bottles.map((bottle, i) => { return <Bottle key={i} bottle={bottle} /> })
                    : null
                }
                
                <div className='Holder'>
                    <input type="text" id='searchBox' className='Hidden' onSubmit={this.search}/>
                    <button onClick={this.search} class='Hidden'></button>
                </div>
            </div>
        )
    }
}