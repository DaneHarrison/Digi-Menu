// ====================================================
// tagView.js
//
// Props:
// - drinks: JSON object (see menu.json under assets) of every drink
// - tag: string representing the current tag
// - selected: a set that holds the id's of selected drinks 
// - modSelected: a function(id, value) that modifies which drinks are selected 
//
// Purpose: Shows the results for drink queries (by their tag attribute)
// ====================================================
import '../style/tagView.css'
import tags from '../assets/tags.json'
import DetailedRecipe from './detailedRecipe'
import RecipeCard from './recipeCard'
import {Modal} from '@mui/material'
import React from 'react'

export default class TagView extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            currRecipe: -1,                 //the index of the current recipe
            photo: this.loadImageTag(tags)  //image associated with the current tag
        }
    }


    loadImageTag(tags) {
        let photo = null;
        
        for(let tag of tags) {
            if(tag.name == this.props.tag) {
                photo = tag.photo;
                break;
            }
        }

        return photo;
    }

    showRecipe(show) {
        this.setState({currRecipe: show});
    }

    render() {
        return(
            <div>
                <Modal open={this.state.currRecipe != -1} onClose={() => this.showRecipe(-1)}>
                    <div className='RecipeModal'>
                        <DetailedRecipe drink={this.props.drinks[this.state.currRecipe]} selected={this.props.selected} modSelected={(index, selected) => this.props.modSelected(index, selected)} />
                    </div>
                </Modal>

                <div className='PhotoHolder'>
                    {this.state.photo ? <img src={this.state.photo} className='TagPhoto'></img> : null}
                </div>

                <div className='SelectionView'>
                    <button onClick={this.props.close} className='GoBackBtn'>Back</button>
                    
                    <div className='CardViewer'>
                        {this.props.drinks.map((drink, i) => { return <RecipeCard key={i} photo={drink.photo} name={drink.name} showRecipe={() => this.showRecipe(i)} /> })}
                    </div>
                </div>
            </div>
        )
    }
}