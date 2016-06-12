// webpack.config.js
module.exports = {
  entry: './client.js',
  output: {
    filename: 'bundle.js'       
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
