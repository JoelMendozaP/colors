import 'styles/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "@reach/router"
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

import Store from 'models/store';
import { path } from 'helpers/router';

import Home from 'views/Home';
import ColorInfo from 'views/ColorInfo';

export const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL
});

ReactDOM.render(
  <Provider store={Store}>
    <Router>
      <ColorInfo path={path('/info/:color')} />
      <Home path={path('/')} />
    </Router>
  </Provider>,
  document.getElementById('root')
);