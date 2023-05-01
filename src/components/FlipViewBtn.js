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
import React from 'react'

export default class FlipViewBtn extends React.Component {
    constructor(props) {
        super(props);

        if(window.screen.orientation) {
            window.addEventListener('fullscreenchange', () => { 
                this.props.setFullScreen(document.fullscreenElement);

                //disables automatic rotation in fullscreen mode
                if(!document.fullscreenElement) {
                    this.props.setLockedVertical(null);
                }
            });
        }
    }


    flipView() {
        if(window.screen.orientation) {
            if(document.documentElement.requestFullscreen) { document.documentElement.requestFullscreen(); }
            else if(document.documentElement.mozRequestFullScreen) { document.documentElement.mozRequestFullScreen(); }
            else if(document.documentElement.webkitRequestFullscreen) { document.documentElement.webkitRequestFullscreen(); }
            else if(document.documentElement.msRequestFullScreen) { document.documentElement.msRequestFullScreen(); }

            if(this.props.isLockedVertical || (this.props.isLockedVertical == null && this.props.isVertical)) {
                this.lockLandscape();
            } 
            else {
                this.lockPotrait();
            }
        }
        else {
            alert("This device does not support automatic rotation, please rotate it manually");
        }
    }

    lockLandscape() {
        window.screen.orientation.lock('landscape-secondary');
        this.props.setLockedVertical(false);
    }

    lockPotrait() {
        window.screen.orientation.lock('portrait-primary');
        this.props.setLockedVertical(true);
    }

    render() {
        return(
            <div className='lol'>
                <button onClick={() => this.flipView()} className='FlipViewBtn'>
                    <p className='NumSelected'>{this.props.count}</p>
                    <img src='./scale/scale.png' className='Photo'></img>
                </button>
            </div>
        )
    }
}