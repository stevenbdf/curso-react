import React from 'react';
import {render} from 'react-dom';
import Playlist from './src/playlist/componentes/playlist.js';
import data from './src/api.json';

const app = document.getElementById('app')

//ReactDOM.render(que voy a renderizar, donde lo hare);
render(<Playlist data={data}/>,app);
