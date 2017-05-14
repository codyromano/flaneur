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
        test: /\.scss$/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader' 
      },
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
      'styles': path.resolve(__dirname, 'src/styles'),
      'flaneur-utils': path.resolve(__dirname, 'src/script/utils.js'),
      'flaneur-constants': path.resolve(__dirname, 'src/script/Constants.js'),
      'components': path.resolve(__dirname, 'src/script/components'),
      'filters': path.resolve(__dirname, 'src/script/filters'),
      'data': path.resolve(__dirname, 'src/data'),
      'pages': path.resolve(__dirname, 'src/script/pages'),
      'reducers': path.resolve(__dirname, 'src/script/reducers'),
      'stores': path.resolve(__dirname, 'src/script/stores')
    }
  }
};