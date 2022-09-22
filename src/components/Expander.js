import React from 'react'

export default class HorizontalExpander extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			numCards: 1
		}

		// window.addEventListener('touchmove') {

		// }
	}

	addCard() {
		//resize other cards
	}

	removeCard() {
		//resize other cards
	}

	readSwip() {
		//verticalDist
		//horizontalDist

		//if(Math.abs(horizontalDist) > Math.abs(verticalDist)) {
			// if(horizontalDist > 0) {	//Positive means swipped right

			// }
			// else {

			// }
		// }
	}

//https://developer.mozilla.org/en-US/docs/Web/API/Element/touchmove_event
//https://developer.mozilla.org/en-US/docs/Web/Events

	render() {
  		return (
			<div>HorizontalExpander</div>
		)
	}
}
