import './style/App.css';
import menu from './assets/menu.json'
import HorizontalExpander from './components/expanderView';
import SelectionView from './components/selectionView';
import FlipViewBtn from './components/flipViewBtn';
import React from 'react'

export default class RotatableApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			vertical: true, 
			menu: menu
		}

		//this is a fix for apple devices
		// if(window.screen.orientation) {
		// 	alert('yes')
		// }
		// else {
		// 	alert('nope')
		// }
		// window.addEventListener('orientationchange', () => {
		// 	//alert(window.orientation)
		// });

		//this works on android
		window.screen.orientation.addEventListener('change', () => {
			switch (window.screen.orientation.type) {
				case 'portrait-primary':
					this.setIsVertical(true);
					break;
				case 'landscape-primary':
					this.setIsVertical(false);
					break;
				case 'landscape-secondary':
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
				<FlipViewBtn count="5" isVertical={this.state.vertical} handler={this.setIsVertical}/>
			</div>
		);
	}
}