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
            showRecipe: false
        }

        setTimeout(() => {
            this.findFromIngredients("tonic water");    
        }, 250);
    }

    findFromIngredients(ingredient) { //should probably just make these all tags later
        let drinkIngredients = []
        let drinksToShow = [];
        let currDrink;

        for(let i = 0; i < this.props.drinks.length; i++) {
            currDrink = this.props.drinks[i];
            drinkIngredients = currDrink.ingredients

            for(let j = 0; j < drinkIngredients.length && !drinksToShow.includes(currDrink); j++) {
                if(drinkIngredients[j].indexOf(ingredient.toLowerCase()) != -1) {
                    drinksToShow.push(currDrink)
                }
            }
        }

        this.setState({showing: drinksToShow})
    }

    findFromTag(tag) {

    }

    showRecipe(show) {
        this.setState({showRecipe: show});
    }

    render() {
        return (
            <div>
                <Modal open={this.state.showRecipe} onClose={() => this.showRecipe(false)}>
                    <div className='RecipeModal'>
                        <DetailedRecipe />
                    </div>
                </Modal>

                <div className='SelectionView'>
                    <TypeSelector ingredientFinder={(ingredient) => this.findFromIngredients(ingredient)} tagFinder={(tag) => this.findFromTag(tag)}/>
                    <div className='CardViewer'>
                        {this.state.showing
                            ? this.state.showing.map((drink, i) => { return <RecipeCard key={i} photo='./favicon.ico' name={drink.name} showRecipe={() => this.showRecipe(true)} /> })
                            : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}