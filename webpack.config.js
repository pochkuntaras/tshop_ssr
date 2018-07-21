const path = require('path');
const webpack = require('webpack');
var root = path.join(process.cwd(), 'src');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3005',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    filename: 'main.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  mode: 'none'
};
