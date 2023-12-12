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
import { DrinkType } from "../assets/assetInterfaces";
import ExpanderCard from "./expanderCard";

import { Swiper, SwiperSlide } from "swiper/react";


interface Props {
	toCompare: DrinkType[]
}

const VertiCardScroller: React.FC<Props> = ({ toCompare }) => {
	return (
		<div>
			<Swiper direction="vertical" className="mySwiper">
				{toCompare && toCompare.map((drink, i) => (
					<SwiperSlide key={i}>
						<ExpanderCard drink={drink} />
					</SwiperSlide>
				))}
			</Swiper>
		</div >
	)
}


export default VertiCardScroller;