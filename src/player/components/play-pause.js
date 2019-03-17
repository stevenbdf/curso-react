import React from 'react';
import './play-pause.css'
import Play from '../../icons/componentes/play.js';
import Pause from '../../icons/componentes/pause.js';

const PlayPause = (props) =>{
    return (
        <div className="PlayPause">
            {
                props.pause ?
                <button
                onClick={props.handleClick}
                >
                    <Play size={25} color="white" />
                </button>
                :
                <button
                onClick={props.handleClick}
                >
                    <Pause size={25} color="white"/>
                </button>
            }
        </div>
    )
}

export default PlayPause;