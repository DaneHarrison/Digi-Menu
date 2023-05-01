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
import '../style/detailedRecipe.css'
import React from 'react'

export default class DetailedRecipe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isSelected: this.props.selected.has(this.props.drink.id)    //check if the current drink is selected
        }
    }

    
    processSelection() {
        let checkBoxVal = document.getElementById('select').checked;    //selection value for current drink
        
        this.setState({isSelected: checkBoxVal});
        this.props.modSelected(this.props.drink.id, checkBoxVal);
    }

    render() {
        return (
            <div className='DetailedRecipe'>
                <div className='CalorieHolder'>
                    <p className='RemoveMargins'>Calories</p>
                    <p className='RemoveMargins'>{this.props.drink.calories}</p>
                </div> 

                <img src={this.props.drink.photo} className='RecipePhoto'></img>

                <div className='Selector'>
                    <label for='select' className='Label'>Select</label>
                    <input type="checkbox" id='select' name='select' checked={this.state.isSelected} onChange={() => this.processSelection()} className='Checkbox'/>
                </div>

                <div className='DrinkDetails'>
                    <h1 className='DrinkName'>{this.props.drink.name}</h1>
                    <div><hr/></div>

                    <div className='Hide'>
                        {this.props.drink.ingredients.map((ingredient, i) => { 
                            return <p key={i} className='RemoveMargins'> {ingredient} </p> })
                        }
                    </div>
                </div>
            </div>
        )
    }
}