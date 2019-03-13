import React from 'react';
import {render} from 'react-dom';
import Home from '../pages/containers/home.js';
import data from '../api.json';
import related from '../apiRelated.json';

const home = document.getElementById('home-container')

//ReactDOM.render(que voy a renderizar, donde lo hare);
render(<Home data={data} related={related}/> ,home);
