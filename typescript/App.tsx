import Menu from './assets/menu.json'
import HorizontalExpander from './components/expanderView';
import SelectionView from './components/selectionView';
import FlipViewBtn from './components/flipViewBtn';

import { useState, useEffect } from 'react';

export default function RotatableApp() {
    const [selected, setSelected] = useState<Set<unknown | number>>(new Set())
    const [isVertical, setIsVertical] = useState(true)
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [isLockedVertical, setIsLockedVertical] = useState<null | boolean>(null)

    useEffect(() => {
        const orientationObserver = () => {
            setIsVertical(window.orientation === 0);
        }

        window.addEventListener('orientationchange', orientationObserver);

        return () => {
            window.removeEventListener('orientationchange', orientationObserver);
        }
    }, [])


    function modSelected(idx: number, wasSelected: boolean) {
        setSelected((prevSelected) => {
            const newSet = new Set(prevSelected);
        
            if (wasSelected) {
              newSet.add(idx);
            } else {
              newSet.delete(idx);
            }
        
            return newSet;
          });
    }

    function clearSelected() {
        setSelected(new Set())
    }

    
    return (
        <div>
            {Menu && ((!isFullscreen && isVertical) || (isFullscreen && isLockedVertical))
                ? <SelectionView menu={Menu} selected={selected} modSelected={modSelected} />
                : <HorizontalExpander menu={Menu} selected={selected} clearSelected={clearSelected} />
            }
            <FlipViewBtn count={selected.size} isVertical={isVertical} isLockedVertical={isLockedVertical} setIsLockedVertical={setIsLockedVertical} setIsFullscreen={setIsFullscreen} />
        </div>
    );
}