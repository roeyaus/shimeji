// webpack.config.js

var path    = require('path');

module.exports = {
  entry: './client.js',
 output: {
    path: __dirname + '/public/dist',
    filename: 'bundle.js',
    publicPath: '/dist/'
  },  
  devtool: 'source-map',
 module: {
preLoaders: [
        { test: /\.json$/, exclude: /node_modules/, loader: 'json'},
    ],

    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
{ test: /\.json$/, loader: "json-loader" }
    ]
  },
resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json', '.coffee'] 
  },
debug : true
};
