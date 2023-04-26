import '../style/typeSelector.css'
import bottles from '../assets/bottles.json'
import Bottle from './bottle';
import React from 'react'

export default class TypeSelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 0,
            bottles: null
        }

        setTimeout(() => this.setState({bottles: this.getAvailableBottles()}), 500)
    }

    getAvailableBottles() {
        let availableBottles = []

        for(let bottleType of bottles) {
            for(let drink of this.props.menu) {
                if(drink.tags.includes(bottleType.name) && drink.available) {
                    availableBottles.push(bottleType)
                    break
                }
            }
        }

        return availableBottles
    }

    searchTag() {
        let tag = document.getElementById('searchBox').value;

        this.props.tagFinder(tag);
        document.getElementById('searchBox').value = '';
    }

    select(selectedIndex) {
        this.setState({selected: selectedIndex});
        this.props.drinkFinder(this.state.bottles[selectedIndex].name)
    }

    render() {
        return (
            <div className='TypeSelector'>
                <div></div>
                {this.state.bottles
                    ? this.state.bottles.map((bottle, i) => { return <Bottle key={i} bottle={bottle} select={() => this.select(i)}/> })
                    : null
                }
                <div></div>
                
                <div className='Holder'>
                    {this.state.bottles ? <p className='BottleLabel'>{this.state.bottles[this.state.selected].name}</p> : null}
                    
                    <div className='Disperse'>
                        <input type="text" id='searchBox' className='Hidden' onSubmit={() => this.search()}/>
                        <button onClick={() => this.searchTag()} className='Hidden'></button>
                    </div>
                </div>
            </div>
        )
    }
}