import React from 'react';
import Playlist from '../../playlist/componentes/playlist.js'
import './category.css';

function Category(props){
  return(
    <div className="Category">
      <h2 className="Category-description">{props.description} </h2>
      <p className="Category-title">{props.title}</p>
      <Playlist playlist={props.playlist} handleModalToggle={props.handleModalToggle} />
    </div>
  )
}

export default Category;
