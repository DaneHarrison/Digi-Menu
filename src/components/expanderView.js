import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import React from 'react'

export default class HorizontalExpander extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showing: [],
			numCards: 1,
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
				<SwiperSlide>Slide 0</SwiperSlide>
				<SwiperSlide>
					<Swiper direction={"vertical"} className="mySwiper">
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
				</SwiperSlide>
				<SwiperSlide>					
					<Swiper direction={"vertical"} className="mySwiper">
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
				</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
				<SwiperSlide>Slide 4</SwiperSlide>
			</Swiper>
	  	</div>
		)
	}
}
