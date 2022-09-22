import React from 'react'

export default class FlipViewBtn extends React.Component {
    flipView() {
        let de = document.documentElement;

        if(de.requestFullscreen) { de.requestFullscreen(); }
        else if(de.mozRequestFullScreen) { de.mozRequestFullScreen(); }
        else if(de.webkitRequestFullscreen) { de.webkitRequestFullscreen(); }
        else if(de.msRequestFullScreen) { de.msRequestFullScreen(); }

        switch (window.screen.orientation.type) {   //fails if full screen is not activated
            case 'landscape-primary':
                window.screen.orientation.lock('portrait-primary');
                this.props.handler(true)
                break;
            case 'portrait-primary':
                window.screen.orientation.lock('landscape-primary');
                this.props.handler(false)
                break;
            default:
                alert("This device does not support automatic rotation, please rotate manually");
        }
    }

    render() {
        return(
            <div>
                <button onClick={this.flipView}>
                    <p>{this.props.selectedCount}</p>
                    <p>Picture</p>
                </button>
                <p>get good</p>
            </div>
        )
    }
}
