// ====================================================
// expanderCard.js
//
// Props:
// - JSON object (see menu.json under assets) of a selected drink
//
// Purpose: Creates a dynamically sizing scrollable card (left and right to create and remove instances [1, 4])
// ====================================================
import '../style/expanderCard.css'
import { DrinkType } from '../assets/assetInterfaces'


interface Props {
    drink: DrinkType
}

const ExpanderCard: React.FC<Props> = ({drink}) => {
    return (
        <div className='ExpanderCard'>
        <img src={drink.photo} className='ExpanderPhoto'></img>

        <div>
            {drink.ingredients && drink.ingredients.map((ingredient, i) => ( 
                <p key={i} className='ExpanderIngredient'> {ingredient} </p> 
            ))}
        </div>
    </div>
    )
}


export default ExpanderCard;