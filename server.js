/* eslint no-console: 0 */

import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {match, RouterContext} from 'react-router';

import routes from './src/Routes';

const app = express();
const PORT = process.env.PORT || 4000;

 app.use(function renderApp(req, res) {

match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      console.log('Error', error);
      res.status(500).send(error);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const html = ReactDOMServer.renderToString(
        <RouterContext {...renderProps} />
      );
 res.send(`<!doctype html>
` + html);
    } else {
      res.status(404).send('Not Found');
    }
   
      });
});

app.listen(PORT, function () {
  console.log('Server listening on', PORT);
});

