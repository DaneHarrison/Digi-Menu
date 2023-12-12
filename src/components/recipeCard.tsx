// ====================================================
// recipeCard.js
//
// Props:
// - photo: string path of the drink's photo
// - name: name of the drink's
// - showRecipe: function() that toggles the detailed view of a drink 
//
// Purpose: creates a card layout to display available drinks
// ====================================================
import '../style/recipeCard.css'


interface Props {
    id: number,
    name: string,
    photo: string,
    setCurrRecipe(id: number): void
}

const RecipeCard: React.FC<Props> = ({id, name, photo, setCurrRecipe}) => {
    return (
        <button onClick={() => setCurrRecipe(id)} className='Card'>                
        <img src={photo} className='Photo'></img>
        <p className='RecipeName'>{name}</p>
    </button>
    )
}


export default RecipeCard;