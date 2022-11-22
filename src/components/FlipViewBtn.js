import '../style/flipViewBtn.css'
import React from 'react'

export default class FlipViewBtn extends React.Component {
    flipView() {
        let de = document.documentElement;

        if(de.requestFullscreen) { de.requestFullscreen(); }
        else if(de.mozRequestFullScreen) { de.mozRequestFullScreen(); }
        else if(de.webkitRequestFullscreen) { de.webkitRequestFullscreen(); }
        else if(de.msRequestFullScreen) { de.msRequestFullScreen(); }

        switch (this.props.isVertical) {
            case true:
                window.screen.orientation.lock('landscape-secondary');
                this.props.handler(false)
                break;

            case false:
                window.screen.orientation.lock('portrait-primary');
                this.props.handler(true)
                break;
                
            default:
                alert("This device does not support automatic rotation, please rotate manually");
        }
    }

    render() {
        return(
            <div>
                <button onClick={() => {this.flipView()}} className='FlipViewBtn'>
                    <p className='NumSelected'>{this.props.count}</p>
                    <img src='./favicon.ico' className='Photo'></img>
                </button>
            </div>
        )
    }
}
