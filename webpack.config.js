const path = require('path');

module.exports = {
  entry: './index',
  output: {
    filename: 'browser-bundle.js'
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/script/components'),
      filters: path.resolve(__dirname, 'src/script/filters'),
      data: path.resolve(__dirname, 'src/data'),
      pages: path.resolve(__dirname, 'src/script/pages')
    }
  }
};