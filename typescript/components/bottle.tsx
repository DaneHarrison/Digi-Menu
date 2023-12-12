// ====================================================
// bottle.js
//
// Props:
// - bottle: JSON object {name: string, photo: string} of the bottle instance
// - select: a function() that swaps the current bottle to whichever was selected 
// - posi: a number representing the bottles position in the slider
//
// Purpose: Creates a bottle-like button
// ====================================================
import '../style/bottle.css'
import { useEffect } from 'react';
import { BottleType } from '../assets/assetInterfaces';


interface Props {
    posi: number,
    bottle: BottleType,
    select(selectedIndex: number): void
}

const Bottle: React.FC<Props> = ({posi, bottle, select}) => {
    useEffect(() => {
        if(posi === 0) 
            (document.getElementById('bottle:0') as any).classList.add('Selected');
    }, [posi])


    return (
        <button onClick={() => select(posi)} className="BottleBtn">
            <img src={bottle.photo} alt={bottle.name + ' selector (clickable)'} className='BottlePic' id={'bottle:' + posi}/>
        </button>
    )
}


export default Bottle;