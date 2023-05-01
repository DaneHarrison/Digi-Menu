// ====================================================
// expanderCard.js
//
// Props:
// - drinks: JSON object (see menu.json under assets) of every drink
// - selected: a set that holds the id's of selected drinks 
//
// Purpose: Creates a horizontal scrollable card view (left and right to create and remove instances [1, 4])
// ====================================================
import "../style/expanderView.css";
import "swiper/css";
import VertiCardScroller from "./vertiCardScroller";
import {Swiper, SwiperSlide} from "swiper/react";
import React from 'react'

export default class HorizontalExpander extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			numCards: 2,									//number of expander cards shown in the view (there can be [1, 4])
			toCompare: this.findSelected(this.props.drinks) //list that holds which drinks from the menu have been selected
		}
	}


	findSelected(drinks) {
		return drinks.filter(drink => this.props.selected.has(drink.id));
	}
	
	updateTabs(swiper) {
		let prevNumCards = this.state.numCards;

		//Always stay on the first index (0), swipping only affects the number of cards shown at a given time
		if(swiper.activeIndex != 1) {
			if(swiper.activeIndex > swiper.previousIndex) {			//if we swiped right
				this.setState({numCards: prevNumCards + 1});	
				swiper.slidePrev();
			}
			else if(swiper.activeIndex < swiper.previousIndex) {	//if we swipped left
				this.setState({numCards: prevNumCards - 1});	
				swiper.slideNext();
			}
		}
	}

	setup(swiper) {
		swiper.slideNext();
	}

	render() {
  		return (
		<div>
			<Swiper slidesPerView={this.state.numCards} className="swiper fullscreen" onSlideChange={(swiper)=> {this.updateTabs(swiper)}} onSwiper={(swiper)=> {this.setup(swiper)}}>
				<SwiperSlide></SwiperSlide>
				<SwiperSlide> <VertiCardScroller list={this.state.toCompare} selected={this.props.selected} /> </SwiperSlide>
				<SwiperSlide> <VertiCardScroller list={this.state.toCompare} selected={this.props.selected} /> </SwiperSlide>
				<SwiperSlide> <VertiCardScroller list={this.state.toCompare} selected={this.props.selected} /> </SwiperSlide>
				<SwiperSlide> <VertiCardScroller list={this.state.toCompare} selected={this.props.selected} /> </SwiperSlide>
			</Swiper>
	  	</div>
		)
	}
}