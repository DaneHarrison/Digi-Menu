// ====================================================
// flipViewBtn.js
//
// Props:
// - count: the number of drinks currently selected 
// - isVertical: boolean that represents if the device is currently vertical 
// - isLockedVertical: boolean that represents if the device is currently locked and vertical 
// - setLockedVertical: function(true|null) that updates the state of the host app
// - setFullScreen: function(true|null) that updates the state of the host app
//
// Purpose: adds device rotation automatic detection and manual processing
// ====================================================
import '../style/flipViewBtn.css'

import { useEffect } from 'react'


interface Props {
    count: number,
    isVertical: boolean,
    isLockedVertical: boolean | null,
    setIsLockedVertical(isLockedVertical: boolean | null): void,
    setIsFullscreen(isFullscreen: boolean): void
}

const FlipViewBtn: React.FC<Props> = ({ count, isVertical, isLockedVertical, setIsLockedVertical, setIsFullscreen }) => {
    useEffect(() => {
        const checkFullScreen = () => {
            let isFullscreen = document.fullscreenElement ? true : false
            setIsFullscreen(isFullscreen);

            //disables automatic rotation in fullscreen mode
            if (!document.fullscreenElement)
                setIsLockedVertical(null);
        }

        if (window.screen.orientation) {
            window.addEventListener('fullscreenchange', checkFullScreen);

            return () => {
                window.removeEventListener('fullscreenchange', checkFullScreen);
            }
        }
    }, [setIsFullscreen, setIsLockedVertical])


    function flipView() {
        if(window.screen.orientation) {
            if (document.documentElement.requestFullscreen)
                document.documentElement.requestFullscreen();
            else if ((document.documentElement as any).mozRequestFullScreen)
                (document.documentElement as any).mozRequestFullScreen();
            else if ((document.documentElement as any).webkitRequestFullscreen)
                (document.documentElement as any).webkitRequestFullscreen();
            else if ((document.documentElement as any).msRequestFullScreen)
                (document.documentElement as any).msRequestFullScreen();
            
            if (isLockedVertical || (isLockedVertical == null && isVertical))
                lockLandscape();
            else
                lockPotrait();
        }
        else {
            alert("This device does not support automatic rotation, please rotate it manually");
        }
    }

    function lockLandscape() {
        (window.screen.orientation as any).lock('landscape-secondary');
        setIsLockedVertical(false);
    }

    function lockPotrait() {
        (window.screen.orientation as any).lock('portrait-primary');
        setIsLockedVertical(true);
    }


    return (
        <div>
            <button onClick={flipView} className='FlipViewBtn'>
                <p className='NumSelected'>{count}</p>
                <img src='./scale/scale.png' alt={'Selected ' + count + ' drinks'}className='FlipPhoto'></img>
            </button>
        </div>
    )
}


export default FlipViewBtn;