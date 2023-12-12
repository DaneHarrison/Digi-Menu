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
import tags from '../assets/tags.json'
import DetailedRecipe from './detailedRecipe'
import RecipeCard from './recipeCard'
import {Modal} from '@mui/material'
import '../style/tagView.css'

import { DrinkType, TagType } from '../assets/assetInterfaces'
import { useState, useEffect } from 'react'


interface Props {
    currentDrinks: DrinkType[],// - drinks: JSON object (see menu.json under assets) of every drink
    currTag: null | string,// - tag: string representing the current tag
    selected: Set<unknown | number>,
    close(close: null): void
    modSelected(idx: number, wasSelected: boolean): void
}

const TagView: React.FC<Props> = ({currentDrinks, currTag, selected, close, modSelected}) => {
    const [currRecipe, setCurrRecipe] = useState(-1)
    const [photo, setPhoto] = useState<null | string>(null)

    useEffect(() => {
        setPhoto(loadImageTag(tags))
    }, [])

    
    function loadImageTag(tags: TagType[]) {
        let photo = null;
        
        for(let tag of tags) {
            if(currTag == tag.name) {
                photo = tag.photo;
                break;
            }
        }

        return photo;
    }

    
    return (
            <div>
                <Modal open={currRecipe != -1} onClose={() => setCurrRecipe(-1)}>
                    <div className='RecipeModal'>
                        <DetailedRecipe drink={currentDrinks[currRecipe]} selected={selected} modSelected={modSelected} />
                    </div>
                </Modal>

                <div className='PhotoHolder'>
                    {photo && <img src={photo} className='TagPhoto'></img>}
                </div>

                <div className='SelectionView'>
                    <button onClick={() => close(null)} className='GoBackBtn'>Back</button>
                    
                    <div className='CardViewer'>
                        {currentDrinks && currentDrinks.map((drink, i) => (
                            <RecipeCard key={i} photo={drink.photo} name={drink.name} setCurrRecipe={setCurrRecipe} id={i} /> 
                        ))}
                    </div>
                </div>
            </div>
    )
}


export default TagView;