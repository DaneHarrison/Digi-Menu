// ====================================================
// detailedRecipe.js
//
// Props:
// - drink: JSON object (see menu.json under assets) of the currently chosen drink
// - selected: a set of drinks that holds have been selected (boxs are checked)
// - modSelected: a function(id, value) that modifies which drinks are selected 
//
// Purpose: Creates a detailed recipe view for the selected drink
// ====================================================
import { DrinkType } from '../assets/assetInterfaces'
import '../style/detailedRecipe.css'

import { useState } from 'react'


interface Props {
    drink: DrinkType,
    selected: Set<unknown | number>,
    modSelected(idx: number, wasSelected: boolean): void
}


const DetailedRecipe: React.FC<Props> = ({ drink, selected, modSelected }) => {
    const [isSelected, setIsSelected] = useState(selected.has(drink.id))


    function processSelection() {
        let checkBoxVal = (document.getElementById('select') as any).checked;    //selection value for current drink

        setIsSelected(checkBoxVal)
        modSelected(drink.id, checkBoxVal);
    }


    return (
        <div className='DetailedRecipe'>
            <div className='CalorieHolder'>
                <p className='RemoveMargins'>Calories</p>
                <p className='RemoveMargins'>{drink.calories}</p>
            </div>

            <img src={drink.photo} className='RecipePhoto'></img>

            <div className='Selector'>
                <label htmlFor='select' className='Label'>Select</label>
                <input type="checkbox" id='select' name='select' defaultChecked={isSelected} onChange={() => processSelection()} className='Checkbox' />
            </div>

            <div className='DrinkDetails'>
                <h1 className='DrinkName'>{drink.name}</h1>
                <div><hr /></div>

                <div className='Hide hideScrollBar'>
                    {drink.ingredients && drink.ingredients.map((ingredient, i) => (
                        <p key={i} className='RemoveMargins'> {ingredient} </p>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default DetailedRecipe;