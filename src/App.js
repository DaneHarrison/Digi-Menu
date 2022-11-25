import menu from './assets/menu.json'
import HorizontalExpander from './components/expanderView';
import SelectionView from './components/selectionView';
import FlipViewBtn from './components/flipViewBtn';
import React from 'react'

export default class RotatableApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			menu: menu,
			isVertical: true,
			selected: new Set(),
			isFullscreen: false,
			isLockedVertical: null
		}

		window.addEventListener('orientationchange', () => {
			this.setIsVertical(window.orientation == 0);
		});
	}


	setIsVertical(isVertical) {
		this.setState({isVertical: isVertical});
	}

	setIsLockedVertical(isLockedVertical) {
		this.setState({isLockedVertical: isLockedVertical});
	}

	setFullScreen(isFullscreen) {
		this.setState({isFullscreen: isFullscreen});
	}

	modSelected(index, selected) {
		let selectedSet = this.state.selected;

		selected ? selectedSet.add(index) : selectedSet.delete(index);
		this.setState({selected: selectedSet});
	}

	render() {		
		return (
			<div className="App">
				{this.state.menu && ((!this.state.isFullscreen && this.state.isVertical) || (this.state.isFullscreen && this.state.isLockedVertical))
					? <SelectionView drinks={this.state.menu} selected={this.state.selected} modSelected={(index, selected) => this.modSelected(index, selected)} />
					: <HorizontalExpander drinks={this.state.menu} selected={this.state.selected} />
				}
				
				<FlipViewBtn count={this.state.selected.size} isVertical={this.state.isVertical} isLockedVertical={this.state.isLockedVertical} setLockedVertical={(val) => this.setIsLockedVertical(val)} setFullScreen={(val) => this.setFullScreen(val)} />
			</div>
		);
	}
}