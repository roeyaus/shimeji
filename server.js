/* eslint no-console: 0 */

import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {match, RouterContext} from 'react-router';

import routes from './src/Routes';

const app = express();
const PORT = process.env.PORT || 4000;
app.use('/', express.static(__dirname + '/public/'))

app.get('*', function renderApp(req, res) {

match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      console.log('Error', error);
      res.status(500).send(error);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {

const renderedHTML = ReactDOMServer.renderToString(<RouterContext {...renderProps} />);
const html = `<html>
<head>
<meta charset="utf-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Bla Bla</title>
</head>
<body>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>
<div id="content">
${renderedHTML}
</div>
<script type="application/javascript" src="/dist/bundle.js"/>
</body>
</html>`
 res.send(`<!doctype html>` + html);
    } else {
      res.status(404).send('Not Found');
    }
   
      });
});

app.listen(PORT, function () {
  console.log('Server listening on', PORT);
});

