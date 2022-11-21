import './style/App.css';
import * as menu from './assets/menu.json'

import React from 'react'
import FlipViewBtn from './components/flipViewBtn';
import SelectionView from './components/selectionView';
import HorizontalExpander from './components/expanderView';


export default class RotatableApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			vertical: true, 
			menu: menu
		}

		window.screen.orientation.addEventListener('change', () => {
			switch (window.screen.orientation.type) {
				case 'portrait-primary':
					this.setIsVertical(true);
					break;
				case 'landscape-primary':
					this.setIsVertical(false);
					break;
				default:
					break;
			}
		});
	}

	setIsVertical(isVertical) {
		this.setState({vertical: isVertical});
	}

	render() {		
		return (
			<div className="App">
				{this.state.vertical
					? <SelectionView drinks={this.state.drinks}/>
					: <HorizontalExpander items={this.state.drinks}/>
				}
				<FlipViewBtn count="5" handler={this.setIsVertical}/>
			</div>
		);
	}
}


//iterate over items to insert into the DOM
//      {objects.map(function(object, i){
//   return <ObjectRow obj={object} key={i} />;
// })}