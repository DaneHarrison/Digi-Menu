// ====================================================
// typeSelector.js
//
// Props:
// - menu: JSON object (see menu.json under assets) of every drink
// - bottleFinder: function(tag) that finds drinks based on the bottle selected 
// - tagFinder: function(tag) that finds drinks based on a tag 
//
// Purpose: a horizontal slider that changes the type of drinks displayed
// ====================================================
import { DrinkType, BottleType } from '../assets/assetInterfaces';
import allBottles from '../assets/bottles.json'
import Bottle from './bottle';
import '../style/typeSelector.css'

import { useState, useEffect } from 'react';


interface Props {
    menu: DrinkType[],
    bottleFinder(bottle: string): void,
    tagFinder(tag: null | string): void
}

const TypeSelector: React.FC<Props> = ({menu, bottleFinder, tagFinder}) => {
    const [selected, setSelected] = useState(0)
    const [bottles, setBottles] = useState<BottleType[]>([])

    useEffect(() => {
        setBottles(getAvailableBottles())
        autoScroll()  
    }, [])


    function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function autoScroll() {
        let scrollContainer = (document.getElementById('scroll-container') as any);
        let scrollSpeed = 1; // Higher values make it scroll faster
        
        setTimeout(async () => {
            while(scrollContainer.scrollLeft < scrollContainer.scrollWidth - scrollContainer.clientWidth) {
                scrollContainer.scrollLeft += scrollSpeed
                await sleep(12)
            }

            await sleep(300)

            while(scrollContainer.scrollLeft > 0) {
                scrollContainer.scrollLeft -= scrollSpeed
                await sleep(12)
            }
        }, 200);

    }

    function getAvailableBottles() {
        let availableBottles = [];

        for(let bottle of allBottles) {
            for(let drink of menu) {
                if(drink.tags.includes(bottle.name) && drink.available) {
                    availableBottles.push(bottle);
                    break;
                }
            }
        }

        return availableBottles;
    }

    function searchTag() {
        let tag = (document.getElementById('searchBox') as any).value;

        tagFinder(tag);
        (document.getElementById('searchBox') as any).value = '';
    }

    function select(selectedIndex: number) {
        //Adjust the opacity for the previously and now selected bottle
        (document.getElementById('bottle:' + selected) as any).classList.remove('Selected');
        (document.getElementById('bottle:' + selectedIndex) as any).classList.add('Selected');
    
        setSelected(selectedIndex)
        bottleFinder(bottles[selectedIndex].name);
    }


    return (
        <div>
        <div className='TypeSelector hideScrollBar' id='scroll-container'>
            {bottles && bottles.map((bottle, i) => (
                <Bottle key={i} posi={i} bottle={bottle} select={() => select(i)}/> 
            ))}
        </div>
        <div className='container'>
            <div className='Holder'>
                {bottles.length > 0 && <p className='BottleLabel'>{bottles[selected].name}</p>}
                
                <div className='Disperse'>
                    <input type="text" id='searchBox' className='Hidden' />
                    <button onClick={() => searchTag()} className='Hidden'></button>
                </div>
            </div>
        </div>
    </div>
    )

}


export default TypeSelector;