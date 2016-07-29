import React from 'react';
import ReactDOM from 'react-dom';

import ListMenu from './components/ListMenu';
import Header from './components/Header';
import ListPost from './components/ListPost';

ReactDOM.render(<ListMenu />, document.getElementById('sideMenu'))
ReactDOM.render(<Header />, document.getElementById('header'))

ReactDOM.render(<ListPost />, document.getElementById('PostList'))