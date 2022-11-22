import {Swiper, SwiperSlide} from "swiper/react";
import React from 'react'

export default class VertiCardScroller extends React.Component {
    render() {
        return(
            <div>
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
            </div>
        )
    }
}