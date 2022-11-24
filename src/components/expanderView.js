import "../style/expanderView.css";
import "swiper/css";
import VertiCardScroller from "./vertiCardScroller";
import {Swiper, SwiperSlide} from "swiper/react";
import React from 'react'

export default class HorizontalExpander extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			numCards: 1,
			toCompare: this.props.drinks.filter(drink => this.props.selected.has(drink.id))
		}
	}

	updateTabs(swiper) {
		let prevNumCards = this.state.numCards;

		if(swiper.activeIndex != 1) {
			if(swiper.activeIndex > swiper.previousIndex) {
				this.setState({numCards: prevNumCards + 1})	
				swiper.slidePrev();
			}
			else if(swiper.activeIndex < swiper.previousIndex) {
				this.setState({numCards: prevNumCards - 1})	
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
			<Swiper slidesPerView={this.state.numCards} className="swiper" onSlideChange={(swiper)=> {this.updateTabs(swiper)}} onSwiper={(swiper)=> {this.setup(swiper)}}>
				<SwiperSlide></SwiperSlide>
				<SwiperSlide> <VertiCardScroller list={this.state.toCompare} selected={this.props.selected} modSelected={(index, selected) => this.props.modSelected(index, selected)} /> </SwiperSlide>
				<SwiperSlide> <VertiCardScroller list={this.state.toCompare} selected={this.props.selected} modSelected={(index, selected) => this.props.modSelected(index, selected)} /> </SwiperSlide>
				<SwiperSlide> <VertiCardScroller list={this.state.toCompare} selected={this.props.selected} modSelected={(index, selected) => this.props.modSelected(index, selected)} /> </SwiperSlide>
				<SwiperSlide> <VertiCardScroller list={this.state.toCompare} selected={this.props.selected} modSelected={(index, selected) => this.props.modSelected(index, selected)} /> </SwiperSlide>
			</Swiper>
	  	</div>
		)
	}
}