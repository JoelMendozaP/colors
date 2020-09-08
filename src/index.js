import 'styles/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "@reach/router"
import { Provider } from 'react-redux';
import Store from 'models/store';

import Home from 'views/Home';
import ColorInfo from 'views/ColorInfo';

ReactDOM.render(
  <Provider store={Store}>
    <Router basepath="/colors">
      <ColorInfo path="/info/:color" />
      <Home path="/" />
    </Router>
  </Provider>,
  document.getElementById('root')
);