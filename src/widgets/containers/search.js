import React, {Component} from 'react'
import Search from '../components/search.js';

class SearchContainer extends Component{
    state = {
        value: 'Twenty-One-Pilots'
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        console.log(this.input.value)
    }

    handleInputChange = event =>{
        this.setState({
            value: event.target.value.replace(' ','-')
        })
    }

    setInputRef = (element) =>{
        this.input = element
    }

    render(){
        return (<Search setRef={this.setInputRef} 
        handleSubmit={this.handleSubmit} 
        handleChange={this.handleInputChange}
        value={this.state.value} />)
    }
}

export default SearchContainer;