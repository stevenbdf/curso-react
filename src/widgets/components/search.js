import React from 'react';
import './search.css';

const Search = (props) => (
    <form className="Search" onSubmit={props.handleSubmit}>   
    <input ref={props.setRef} 
    type="text" name="search" 
    className="Search-input" placeholder="Busca tu video favorito..."
    value={props.value} onChange={props.handleChange} ></input>
    </form>
)

export default Search