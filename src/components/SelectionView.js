// ====================================================
// selectionView.js
//
// Props:
// - drinks: JSON object (see menu.json under assets) of every drink
// - selected: a set that holds the id's of selected drinks 
// - modSelected: a function(id, value) that modifies which drinks are selected 
//
// Purpose: Creates a vertical scrollable card view for recipes
// ====================================================
import '../style/selectionView.css'
import DetailedRecipe from './detailedRecipe'
import TypeSelector from './typeSelector'
import RecipeCard from './recipeCard'
import TagView from './tagView'
import {Modal} from '@mui/material'
import React from 'react'

export default class SelectionView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showing: [],        //drinks shown based on the current bottle
            showingByTag: [],   //drinks shown based on a search
            currRecipe: -1,     //current recipe being shown (no drink defaults to -1)
            currTag: null       //current search tag (no tag defaults to null)
        }
    }


    componentDidMount() {
        this.findFromBottle("Non Alcoholic"); 
    }
    
    showRecipe(show) {
        this.setState({currRecipe: show});
    }

    findFromBottle(bottle) {
        let drinksFromBottle = this.findFromTag(bottle);
        let cardViewer = document.getElementById('CardViewer');

        this.setState({showing: drinksFromBottle.filter((drink) => drink.available)});
        cardViewer.scrollTop = 0;   //when a different bottle is selected scroll to the top
    }

    searchDrinks(tag) {
        this.setState({currTag: tag});
        this.setState({showingByTag: this.findFromTag(tag)});
    }

    findFromTag(tag) {
        return this.props.drinks.filter((drink) => drink.tags.includes(tag));
    }

    render() {
        return (
            <div>
                <Modal open={this.state.currRecipe != -1} onClose={() => this.showRecipe(-1)}>
                    <div className='RecipeModal'>
                        <DetailedRecipe drink={this.state.showing[this.state.currRecipe]} selected={this.props.selected} modSelected={(index, selected) => this.props.modSelected(index, selected)} />
                    </div>
                </Modal>

                <Modal open={this.state.showingByTag.length > 0} onClose={() => this.searchDrinks(null)}>
                    <div className='TagModal'>
                        <TagView drinks={this.state.showingByTag} tag={this.state.currTag} selected={this.props.selected} modSelected={(index, selected) => this.props.modSelected(index, selected)} close={() => this.searchDrinks(null)} />
                    </div>
                </Modal>

                <div className='SelectionView'>
                    <TypeSelector menu={this.props.drinks} bottleFinder={(tag) => this.findFromBottle(tag)} tagFinder={(tag) => this.searchDrinks(tag)} />
                    <div className='CardViewer' id='CardViewer'>
                        {this.state.showing
                            ? this.state.showing.map((drink, i) => { return <RecipeCard key={i} photo={drink.photo} name={drink.name} showRecipe={() => this.showRecipe(i)} /> })
                            : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}