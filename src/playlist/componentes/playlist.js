import React, { Component } from 'react';
import Media from './media.js';
import './playlist.css';

class Playlist extends Component {
  render() {
    /* Obtenemos informacion de la api.json */
    const playlist1 = this.props.data.categories[0].playlist
    const playlist2 = this.props.data.categories[1].playlist
    const playlist3 = this.props.data.categories[2].playlist

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
}

export default Playlist;
