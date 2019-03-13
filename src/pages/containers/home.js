import React, {Component} from 'react';
import HomeLayout from '../componentes/home-layout.js'
import Categories from '../../categories/componentes/categories.js'
import Related from '../componentes/related-layout.js';
import ModalContainer from '../../widgets/containers/modal.js';
import Modal from '../../widgets/components/modal.js';
import HandleError from '../../error/containers/handle-error.js';

class Home extends Component {
  state ={
    modalVisible: false,
    handleError: false
  }


  handleModalToggle = (event)=>{
    this.setState({
      modalVisible : !this.state.modalVisible
    })
  }

  componentDidCatch(error, info){
    this.setState({
      handleError: true
    })
  }

  render(){
    return(
      <HandleError>
        <HomeLayout>
          <Related related={this.props.related} />
          <Categories categories={this.props.data.categories} handleModalToggle={this.handleModalToggle} />
          {
            this.state.modalVisible &&
              <ModalContainer>
              <Modal handleClick={this.handleModalToggle}>
                <h1>Esto es un modal</h1>
              </Modal>
            </ModalContainer>
          }
          
        </HomeLayout>
      </HandleError>
    )
    
  }


}

export default Home;
