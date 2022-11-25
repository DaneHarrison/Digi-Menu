import '../style/selectionView.css'
import DetailedRecipe from './detailedRecipe'
import TypeSelector from './typeSelector'
import RecipeCard from './recipeCard'
import { Modal } from '@mui/material'
import React from 'react'

export default class SelectionView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showing: [],
            currRecipe: -1
        }

        setTimeout(() => {
            this.findFromTag("Non Alcoholic");    
        }, 250);
    }

    
    findFromTag(tag) {
        let drinksToShow = [];
        let drinkTags;

        for(let i = 0; i < this.props.drinks.length; i++) {
            drinkTags = this.props.drinks[i].tags

            for(let j = 0; j < drinkTags.length && !drinksToShow.includes(this.props.drinks[i]); j++) {
                if(drinkTags[j].toLowerCase() == tag.toLowerCase()) {
                    drinksToShow.push(this.props.drinks[i])
                }
            }
        }

        this.setState({showing: drinksToShow})
    }

    showRecipe(show) {
        this.setState({currRecipe: show});
    }

    render() {
        return (
            <div>
                <Modal open={this.state.currRecipe != -1} onClose={() => this.showRecipe(-1)}>
                    <div className='RecipeModal'>
                        <DetailedRecipe drink={this.state.showing[this.state.currRecipe]} selected={this.props.selected} modSelected={(index, selected) => this.props.modSelected(index, selected)} />
                    </div>
                </Modal>

                {/* Can put the search modal in here for friends*/}

                <div className='SelectionView'>
                    <TypeSelector ingredientFinder={(tag) => this.findFromTag(tag)} />
                    <div className='CardViewer'>
                        {this.state.showing
                            ? this.state.showing.map((drink, i) => { return <RecipeCard key={i} photo='./favicon.ico' name={drink.name} showRecipe={() => this.showRecipe(i)} /> })
                            : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}