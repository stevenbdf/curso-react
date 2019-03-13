import React from 'react';
import Media from './media.js';
import './playlist.css';

function Playlist (props) {

    return (
        <div className="Playlist miDivScrolleableHorizontal">
          {
            props.playlist.map((item) => {
              return <Media {...item} key={item.id} handleClick={props.handleModalToggle} />
            })
          }
        </div>
    )
}


export default Playlist;
