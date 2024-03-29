// ====================================================
// typeSelector.js
//
// Props:
// - menu: JSON object (see menu.json under assets) of every drink
// - bottleFinder: function(tag) that finds drinks based on the bottle selected 
// - tagFinder: function(tag) that finds drinks based on a tag 
//
// Purpose: a horizontal slider that changes the type of drinks displayed
// ====================================================
import '../style/typeSelector.css'
import bottles from '../assets/bottles.json'
import Bottle from './bottle';
import React from 'react'

export default class TypeSelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 0,    //the id of the bottle currently selected
            bottles: null   //a list of bottle objects (see bottles.json under assets)
        }
    }


    componentDidMount() {
        this.setState({bottles: this.getAvailableBottles()});
        this.autoScroll()   
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async autoScroll() {
        let scrollContainer = document.getElementById('scroll-container');
        let scrollSpeed = 1; // Higher values make it scroll faster
        
        setTimeout(async () => {
            while(scrollContainer.scrollLeft < scrollContainer.scrollWidth - scrollContainer.clientWidth) {
                scrollContainer.scrollLeft += scrollSpeed
                await this.sleep(12)
            }

            await this.sleep(300)

            while(scrollContainer.scrollLeft > 0) {
                scrollContainer.scrollLeft -= scrollSpeed
                await this.sleep(12)
            }
        }, 200);

    }

    getAvailableBottles() {
        let availableBottles = [];

        for(let bottleType of bottles) {
            for(let drink of this.props.menu) {
                if(drink.tags.includes(bottleType.name) && drink.available) {
                    availableBottles.push(bottleType);
                    break;
                }
            }
        }

        return availableBottles;
    }

    searchTag() {
        let tag = document.getElementById('searchBox').value;

        this.props.tagFinder(tag);
        document.getElementById('searchBox').value = '';
    }

    select(selectedIndex) {
        this.setState({selected: selectedIndex});
        this.props.bottleFinder(this.state.bottles[selectedIndex].name);

        //Adjust the opacity for the previously and now selected bottle
        document.getElementById('bottle:' + this.state.selected).classList.remove('Selected');
        document.getElementById('bottle:' + selectedIndex).classList.add('Selected');
    }

    render() {
        return (
            <div>
                <div className='TypeSelector hideScrollBar' id='scroll-container'>
                    {this.state.bottles
                        ? this.state.bottles.map((bottle, i) => { return <Bottle key={i} posi={i} bottle={bottle} select={() => this.select(i)}/> })
                        : null 
                    }
                </div>
                <div class='container'>
                    <div className='Holder'>
                        {this.state.bottles ? <p className='BottleLabel'>{this.state.bottles[this.state.selected].name}</p> : null}
                        
                        <div className='Disperse'>
                            <input type="text" id='searchBox' className='Hidden' onSubmit={() => this.search()}/>
                            <button onClick={() => this.searchTag()} className='Hidden'></button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}