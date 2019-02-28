import React from 'react';
import {render} from 'react-dom';
import Home from '../pages/containers/home.js';
import data from '../api.json';

const app = document.getElementById('app')

//ReactDOM.render(que voy a renderizar, donde lo hare);
render(<Home data={data}/>,app);
