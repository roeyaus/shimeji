import createBrowserHistory from 'history/lib/createBrowserHistory';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';

import routes from './src/Routes';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history} children={routes} />,
  document.getElementById("content")
);
