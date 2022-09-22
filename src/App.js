import './style/App.css';
import * as drinks from './assets/Drinks.json'

import React from 'react'
import FlipViewBtn from './components/FlipViewBtn';
import SelectionView from './components/SelectionView';
import HorizontalExpander from './components/Expander';




export default class RotatableApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			drinks: drinks,
			forceRotated: false
		}
	}

	render() {		
		return (
			<div className="App">
				{window.screen.orientation.type === 'portrait-primary' && !this.state.forceRotated 
					? <SelectionView drinks={this.state.drinks}/>
					: <HorizontalExpander items={this.state.drinks}/>
				}
				<FlipViewBtn count="5"/>
			</div>
		);
	}
}


//iterate over items to insert into the DOM
//      {objects.map(function(object, i){
//   return <ObjectRow obj={object} key={i} />;
// })}