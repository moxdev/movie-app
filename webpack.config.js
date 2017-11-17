// Using node's native package 'path'
// https://nodejs.org/api/path.html
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src/js')
};

// Webpack configuration
module.exports = {
  devtool: 'source-map',
  entry: path.join(paths.JS, 'index.jsx'),
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js'
  },
  // Tell webpack to use html plugin
  // index.html is used as a template in which it'll inject bundled app.
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html')
    }),
    new ExtractTextPlugin('style.bundle.css')
  ],
  // Loaders configuration
  // Configure webpack to use "babel-loader" for .js and .jsx files
  module: {
    rules: [
      // JS Setup
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      // Stylus Setup
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract({
          fallback: { loader: 'style-loader' },
          use: [
            'css-loader',
            {
              loader: 'stylus-loader'
            }
          ]
        })
      },
      // File Loader for adding assests to components
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: ['file-loader']
      }
    ]
  },
  // Enable importing JS files without specifying their extenstion
  resolve: {
    extensions: ['.js', '.jsx', '.styl'],
    modules: [path.resolve('./client'), path.resolve('./node_modules')]
  }
};
