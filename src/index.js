import 'styles/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, navigate } from "@reach/router"
import { Provider } from 'react-redux';

import Store from 'models/store';
import { path, setup_router } from 'helpers/router';

import Home from 'views/Home';
import ColorInfo from 'views/ColorInfo';

setup_router(navigate);

ReactDOM.render(
  <Provider store={Store}>
    <Router>
      <ColorInfo path={path('/info/:color')} />
      <Home path={path('/')} />
    </Router>
  </Provider>,
  document.getElementById('root')
);