import React from 'react';

function RelatedContent(props){
  return(
        <li className="image">
        {
            props.img!==undefined &&
            <img src={props.img} />
        }
        <p>{props.titulo}</p>
        </li>
  )
}

export default RelatedContent;