import '../style/detailedRecipe.css'
import React from 'react'

export default class DetailedRecipe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isSelected: this.props.selected.has(this.props.drink.id)
        }
    }

    
    processSelection() {
        let checkBoxVal = document.getElementById('select').checked;
        
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

                <img src='./favicon.ico' className='RecipePhoto'></img>

                <div className='Selector'>
                    <label for='select' className='Label'>Select</label>
                    <input type="checkbox" id='select' name='select' checked={this.state.isSelected} onChange={() => this.processSelection()} className='Checkbox'/>
                </div>

                <div className='DrinkDetails'>
                    <h1 className='DrinkName'>{this.props.drink.name}</h1>
                    <div><hr></hr></div>

                    <div className='Hide'>
                        {this.props.drink.ingredients.map((ingredient, i) => { return <p key={i} className='RemoveMargins'> {ingredient} </p> })}
                    </div>
                </div>
            </div>
        )
    }
}