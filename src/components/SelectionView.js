import '../style/selectionView.css'
import DetailedRecipe from './detailedRecipe'
import TypeSelector from './typeSelector'
import RecipeCard from './recipeCard'
import { Modal } from '@mui/material'
import React from 'react'

export default class SelectionView extends React.Component {
    //pull data from the database
    //if this point is accessesd then access then route
    constructor(props) {
        super(props);

        this.state = {
            selected: 0,
            showRecipe: false,
            
            style: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }
        }
    }

    showRecipe() {
        this.setState({showRecipe: true});
    }

    closeRecipe() {
        this.setState({showRecipe: false});
    }

    render() {
        return (
            <div>
                <Modal open={this.state.showRecipe} onClose={() => {this.closeRecipe()}}>
                    <div className='RecipeModal'>
                        <DetailedRecipe />
                    </div>
                </Modal>

                <div className='SelectionView'>
                    <TypeSelector/>
                    <div className='CardViewer'>
                        <RecipeCard photo='./favicon.ico' name='lol' showRecipe={() => {this.showRecipe()}} />
                        <RecipeCard photo='./favicon.ico' name='lol' showRecipe={() => {this.showRecipe()}} />
                        <RecipeCard photo='./favicon.ico' name='lol' showRecipe={() => {this.showRecipe()}} />
                        <RecipeCard photo='./favicon.ico' name='lol' showRecipe={() => {this.showRecipe()}} />
                        <RecipeCard photo='./favicon.ico' name='lol' showRecipe={() => {this.showRecipe()}} />
                        <RecipeCard photo='./favicon.ico' name='lol' showRecipe={() => {this.showRecipe()}} />
                        <RecipeCard photo='./favicon.ico' name='lol' showRecipe={() => {this.showRecipe()}} />
                        <RecipeCard photo='./favicon.ico' name='lol' showRecipe={() => {this.showRecipe()}} />
                        <RecipeCard photo='./favicon.ico' name='lol' showRecipe={() => {this.showRecipe()}} />
                        <RecipeCard photo='./favicon.ico' name='lol' showRecipe={() => {this.showRecipe()}} />
                        <RecipeCard photo='./favicon.ico' name='lol' showRecipe={() => {this.showRecipe()}} />
                        <RecipeCard photo='./favicon.ico' name='lol' showRecipe={() => {this.showRecipe()}} />
                        <RecipeCard photo='./favicon.ico' name='lol' showRecipe={() => {this.showRecipe()}} />
                        <RecipeCard photo='./favicon.ico' name='lol' showRecipe={() => {this.showRecipe()}} />
                        <RecipeCard photo='./favicon.ico' name='lol' showRecipe={() => {this.showRecipe()}} />
                        <RecipeCard photo='./favicon.ico' name='lol' showRecipe={() => {this.showRecipe()}} />
                        <RecipeCard photo='./favicon.ico' name='lol' showRecipe={() => {this.showRecipe()}} />
                        <RecipeCard photo='./favicon.ico' name='lol' showRecipe={() => {this.showRecipe()}} />
                        <RecipeCard photo='./favicon.ico' name='lol' showRecipe={() => {this.showRecipe()}} />
                        <RecipeCard photo='./favicon.ico' name='lol' showRecipe={() => {this.showRecipe()}} />
                    </div>
                </div>
            </div>
        )
    }
}
