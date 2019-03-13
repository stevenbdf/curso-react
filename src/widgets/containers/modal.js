import React, {Component} from 'react';
import {createPortal} from 'react-dom';

class ModalContainer extends Component{
    render(){
        //que voy a renderizar y donde
        return createPortal(
            this.props.children,
            document.getElementById('modal-container'))
    }
}

export default ModalContainer;