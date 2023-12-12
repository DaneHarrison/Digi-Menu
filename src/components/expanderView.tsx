// ====================================================
// expanderCard.js
//
// Props:
// - drinks: JSON object (see menu.json under assets) of every drink
// - selected: a set that holds the id's of selected drinks 
// - clear: a function that clears the selected list
//
// Purpose: Creates a horizontal scrollable card view (left and right to create and remove instances [1, 4])
// ====================================================
import VertiCardScroller from "./vertiCardScroller";
import { DrinkType } from "../assets/assetInterfaces";
import "../style/expanderView.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import "swiper/css";


interface Props {
	menu: DrinkType[],
	selected: Set<unknown | number>,
	clearSelected(): void
}

const HorizontalExpander: React.FC<Props> = ({ menu, selected, clearSelected }) => {
	const [numCards, setNumCards] = useState(1)
	const [toCompare, setToCompare] = useState<DrinkType[]>([])

	useEffect(() => {
		let selectedDrinks = menu.filter(drink => selected.has(drink.id));
		setToCompare(selectedDrinks)
	}, [menu, selected])


	function updateTabs(swiper: any) {
		//Always stay on the first index (0), swipping only affects the number of cards shown at a given time
		if (swiper.activeIndex !== 1) {
			if (swiper.activeIndex > swiper.previousIndex) {			//if we swiped right
				setNumCards((prev) => prev + 1)
				swiper.slidePrev();
			}
			else if (swiper.activeIndex < swiper.previousIndex) {	//if we swipped left
				setNumCards((prev) => prev - 1)
				swiper.slideNext();
			}
		}
	}

	function setup(swiper: any) {
		swiper.slideNext();
	}


	return (
		<div className='inline'>
			{(numCards === 1 || toCompare.length === 0) &&
				<div className='instuctionTxt'>
					<h2>Welcome to the comparison tab</h2>
					<ul>
						<li>Swipe up and down to cycle through selections</li>
						<br />
						<li>Swipe right to display up to 4 drinks at once</li>
						<br />
						<li>Swipe left to display fewer drinks</li>
					</ul>
					<button onClick={clearSelected} className='clearButton'>Unselect Drinks</button>
				</div>
			}

			<Swiper slidesPerView={numCards} className="swiper fullscreen" onSlideChange={updateTabs} onSwiper={setup}>
				<SwiperSlide />

				<SwiperSlide> <VertiCardScroller toCompare={toCompare} /> </SwiperSlide>
				<SwiperSlide> <VertiCardScroller toCompare={toCompare} /> </SwiperSlide>
				<SwiperSlide> <VertiCardScroller toCompare={toCompare} /> </SwiperSlide>
				<SwiperSlide> <VertiCardScroller toCompare={toCompare} /> </SwiperSlide>
			</Swiper>
		</div>
	)
}


export default HorizontalExpander;