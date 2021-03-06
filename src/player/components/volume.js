import React from 'react';
import VolumeIcon from '../../icons/componentes/volume.js';
import './volume.css';

function Volume(props){
    return(
        <button 
        className="Volume"
        >
            <div onClick={props.handleVolumeMuted}>
                <VolumeIcon
                color="white"
                size={25}
                />
            </div>
            <div className="Volume-range">
                <input
                id="volumen-controller"
                type="range"
                min={0}
                max={1}
                step={0.05}
                onChange={props.handleVolumeChange}
                />
            </div>
        </button>
    )
}

export default Volume