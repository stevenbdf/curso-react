import React from 'react';
import FullScreenIcon from '../../icons/componentes/full-screen.js';
import './full-screen.css'

function FullScreen(props){
    return(
        <div 
        className="FullScreen"
        onClick={props.handleFullScreenClick}
        >
            <FullScreenIcon
            color="white"
            size={25}
            />
        </div>
    )
}

export default FullScreen;