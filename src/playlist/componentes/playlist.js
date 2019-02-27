import React from 'react';
import Media from './media.js';
import './playlist.css';

function Playlist (props) {
    // Obtenemos informacion de la api.json
    const playlist1 = props.data.categories[0].playlist
    const playlist2 = props.data.categories[1].playlist
    const playlist3 = props.data.categories[2].playlist

    console.log(props.data)
    return (

      <div className="playlists">
        <div className="Playlist miDivScrolleableHorizontal">
          {
            playlist1.map((item) => {
              return <Media {...item} key={item.id} />
            })
          }
        </div>

        <div className="Playlist miDivScrolleableHorizontal">
          {
            playlist2.map((item) => {
              return <Media {...item} key={item.id} />
            })
          }
        </div>

        <div className="Playlist miDivScrolleableHorizontal">
          {
            playlist3.map((item) => {
              return <Media {...item} key={item.id} />
            })
          }
        </div>
      </div>
    )
}


export default Playlist;
