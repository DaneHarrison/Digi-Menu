import ExpanderCard from "./expanderCard";
import {Swiper, SwiperSlide} from "swiper/react";
import React from 'react'

export default class VertiCardScroller extends React.Component {
    render() {
        return(
            <div>
				<Swiper direction={"vertical"} className="mySwiper">
					{this.props.list.map((drink, i) => { return (
						<SwiperSlide key={i}>
							<ExpanderCard key={i} drink={drink} selected={this.props.selected} modSelected={(index, selected) => this.props.modSelected(index, selected)} />
						</SwiperSlide>
					)})}
				</Swiper>
            </div>
        )
    }
}