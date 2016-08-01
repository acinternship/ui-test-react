import React from 'react';
import ReactDOM from 'react-dom';

import ListMenu from '../components/ListMenu';
import Header from '../components/Header';

ReactDOM.render(<ListMenu />, document.getElementById('sideMenu'))
ReactDOM.render(<Header />, document.getElementById('header'))
