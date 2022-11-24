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
                <img src='./favicon.ico' className='Photo'></img>

                <div className='DrinkDetails'>
                    <div className='Selector'>
                        <label for='select'>Select</label>
                        <input type="checkbox" id='select' name='select' checked={this.state.isSelected} onChange={() => this.processSelection()}/>
                    </div>

                    <h1>{this.props.drink.name}</h1>

                    <div className='Hide'>
                        {this.props.drink.ingredients.map((ingredient, i) => { return <p key={i} className='Ingredient'> {ingredient} </p> })}
                    </div>
                </div>
            </div>
        )
    }
}