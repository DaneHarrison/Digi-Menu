import '../style/selectionView.css'
import TypeSelector from './typeSelector'
import DetailedRecipe from './detailedRecipe'
import RecipeCard from './recipeCard'
import React from 'react'

export default class SelectionView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 0
        }
    }

    render() {
        return (
            <DetailedRecipe />
            // <div className='SelectionView'>
            //     <TypeSelector/>
            //     <div className='CardViewer'>
            //         <RecipeCard photo='./favicon.ico' name='lol'/>
            //         <RecipeCard photo='./favicon.ico' name='lol'/>
            //         <RecipeCard photo='./favicon.ico' name='lol'/>
            //         <RecipeCard photo='./favicon.ico' name='lol'/>
            //         <RecipeCard photo='./favicon.ico' name='lol'/>
            //         <RecipeCard photo='./favicon.ico' name='lol'/>
            //         <RecipeCard photo='./favicon.ico' name='lol'/>
            //         <RecipeCard photo='./favicon.ico' name='lol'/>
            //         <RecipeCard photo='./favicon.ico' name='lol'/>
            //         <RecipeCard photo='./favicon.ico' name='lol'/>
            //         <RecipeCard photo='./favicon.ico' name='lol'/>
            //     </div>
            // </div>
        )
    }
}
