import React from 'react';
import Logo from '../../../images/logo.png';
import './related-layout.css';
import RelatedContent from './related-content.js';
import './related-content.css';

function Related(props){
  return(
    <div className="Related">
      <img src={Logo} width={250} />
      <h3>Mi Playlist</h3>
      <ul>
        {
          
          props.related.myPlaylist.map((item)=>{
            return(
              <RelatedContent
              key={item.id} {...item} />
            )
          })
        }   
      </ul>
      <h3>Playlist de Amigos</h3>
      <ul className="friends">
        {
          props.related.friendsPlaylist.map((item)=>{
            return(
              <RelatedContent
              key={item.id} {...item} />
            )
          })
        }   
      </ul>
    </div>
  )
}

export default Related;
