'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import 'antd/dist/antd.css';
import App from './app/components/App';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={ App }/>
  </Router>
), document.getElementById('app'));


