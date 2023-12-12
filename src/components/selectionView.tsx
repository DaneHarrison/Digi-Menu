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
import { Modal } from '@mui/material'
import { DrinkType } from '../assets/assetInterfaces'
import { useState, useEffect } from 'react'


interface Props {
    menu: DrinkType[],
    selected: Set<unknown | number>,
    modSelected(idx: number, wasSelected: boolean): void
}

const SelectionView: React.FC<Props> = ({ menu, selected, modSelected }) => {
    const [showing, setShowing] = useState<DrinkType[]>([])
    const [showingByTag, setShowingByTag] = useState<DrinkType[]>([])
    const [currRecipe, setCurrRecipe] = useState(-1)
    const [currTag, setCurrTag] = useState<null | string>(null)

    useEffect(() => {
        findFromBottle("Non Alcoholic");
    }, [])

    function findFromBottle(bottle: string) {
        let drinksFromBottle = findFromTag(bottle);
        let cardViewer = document.getElementById('CardViewer');

        setShowing(drinksFromBottle.filter((drink) => drink.available));
        (cardViewer as any).scrollTop = 0;   //when a different bottle is selected scroll to the top
    }

    function searchDrinks(tag: null | string) {
        setCurrTag(tag)
        setShowingByTag(findFromTag(tag))
    }

    function findFromTag(tag: null | string) {
        return tag ? menu.filter((drink) => drink.tags.includes(tag)) : []
    }


    return (
        <div>
            <Modal open={currRecipe != -1} onClose={() => setCurrRecipe(-1)}>
                <div className='RecipeModal'>
                    <DetailedRecipe drink={showing[currRecipe]} selected={selected} modSelected={modSelected} />
                </div>
            </Modal>

            <Modal open={showingByTag.length > 0} onClose={() => searchDrinks(null)}>
                <div className='TagModal'>
                    <TagView currentDrinks={showingByTag} currTag={currTag} selected={selected} modSelected={modSelected} close={searchDrinks} />
                </div>
            </Modal>

            <div className='SelectionView'>
                <TypeSelector menu={menu} bottleFinder={findFromBottle} tagFinder={searchDrinks} />
                <div className='CardViewer' id='CardViewer'>
                    {showing && showing.map((drink, i) => (
                        <RecipeCard key={i} photo={drink.photo} name={drink.name} setCurrRecipe={setCurrRecipe} id={i} />
                    ))}
                </div>
            </div>
        </div>
    )
}


export default SelectionView;