import React, {Component} from 'react';
import HomeLayout from '../componentes/home-layout.js'
import Categories from '../../categories/componentes/categories.js'

class Home extends Component {
  render(){
    return(
      <HomeLayout>
        <Categories categories={this.props.data.categories}/>
      </HomeLayout>
    )
  }
}

export default Home;
