import React from 'react';
import './modal.css'

const Modal = (props) =>{
    return(
        <div className="Modal">
            esto es un modal 2222
            {props.children}
            <button onClick={props.handleClick}>cerrar</button>
        </div>
    )
}

export default Modal;