import '../style/typeSelector.css'
import bottles from '../assets/bottles.json'
import Bottle from './bottle';
import React from 'react'

export default class TypeSelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 0,
            bottles: bottles
        }
    }

    searchTag() {
        //document.getElementById('searchBox').value
        document.getElementById('searchBox').value = '';
    }

    select(selectedIndex) {
        this.setState({selected: selectedIndex});
        this.props.ingredientFinder(this.state.bottles[selectedIndex].name)
    }

    render() {
        return (
            <div className='TypeSelector'>
                <div></div>
                {this.state.bottles
                    ? this.state.bottles.map((bottle, i) => { return <Bottle key={i} bottle={bottle} select={(selected) => this.select(selected)}/> })
                    : null
                }
                <div></div>
                
                <div className='Holder'>
                    {this.state.bottles ? <p className='BottleLabel'>{this.state.bottles[this.state.selected].name}</p> : null}
                    
                    <div className='Disperse'>
                        <input type="text" id='searchBox' className='Hidden' onSubmit={this.search}/>
                        <button onClick={this.searchTag} className='Hidden'></button>
                    </div>
                </div>
            </div>
        )
    }
}