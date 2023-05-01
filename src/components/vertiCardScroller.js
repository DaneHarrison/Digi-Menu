// ====================================================
// vertiCardScroller.js
//
// Props:
// - list: the list of drink on the menu (see menu.json under assets)
// - selected: a set of drinks that holds have been selected (boxs are checked)
// - modSelected: a function(id, value) that modifies which drinks are selected  
//
// Purpose: creates a vertical scroller to shuffle between selected drinks per card
// ====================================================
import ExpanderCard from "./expanderCard";
import {Swiper, SwiperSlide} from "swiper/react";
import React from 'react'

export default class VertiCardScroller extends React.Component {
    render() {
        return(
            <div>
				<Swiper direction={"vertical"} className="mySwiper">
					{this.props.list.map((drink, i) => { 
						return (
							<SwiperSlide key={i}>
								<ExpanderCard key={i} drink={drink} selected={this.props.selected} modSelected={(index, selected) => this.props.modSelected(index, selected)} />
							</SwiperSlide>
						)
					})}
				</Swiper>
            </div>
        )
    }
}