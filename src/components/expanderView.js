import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import React from 'react'

export default class HorizontalExpander extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showing: [],
			currCard: 0
		}
	}

	hi(activeIndex) {
		let hi = activeIndex.activeIndex;
		// alert(this.state.currCard + ' ' + hi)
		this.setState({currCard: hi})

	}

	render() {
  		return (
			<div>
			<Swiper
        slidesPerView={this.state.currCard}
        spaceBetween={0}
        className="swiper"
		onActiveIndexChange={(activeIndex)=> {this.hi(activeIndex)}}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
	  </div>
		)
	}
}
