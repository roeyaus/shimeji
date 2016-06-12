import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Router} from 'react-router';

import routes from './src/Routes';

ReactDOM.render(
  <Router history={browserHistory} children={routes} />,
  document.getElementById("content")
);
