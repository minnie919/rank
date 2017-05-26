var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var node_modules = path.resolve(__dirname, 'node_modules');
var fetchPath = path.resolve(__dirname, 'src/lib/fetch-jsonp');
var devPath = path.resolve(__dirname, 'dev');

if (process.env.SELF_ENV === 'mock') {
  fetchPath = path.resolve(__dirname, 'src/lib/fetch-jsonp-mock');
}


console.log(process.env.SELF_ENV)
module.exports = {
  devtool:'source-map',
  entry: {
    0: 'webpack-dev-server/client?http://0.0.0.0:8080',
    1: 'webpack/hot/dev-server',
    index: path.resolve(__dirname, 'src/index.js')
  },
  devServer: {
    // https:true,
    host: '0.0.0.0',
    port: '8080',
    hot: true,
    progress: true,
    watch: true,
    colors: true,
    compress: true,
    contentBase: devPath
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
    alias: {
      'fetchJsonp': fetchPath
    }
  },
  output: {
    publicPath: '/dev/',
    path: path.resolve(__dirname, 'dev'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      "FetchJsonp": 'fetchJsonp'
    }),
    new HtmlWebpackPlugin({
      excludeChunks: ['0', '1'],
      chunks:['index'],
      filename: 'index.html',
      template: 'src/index.ejs',
      minify: {
        collapseWhitespace: true,
        conservativeCollapse: true,
        minifyJS:true,
        minifyCSS:true
      },
      dev: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    preLoaders: [
      {test: /\.jsx?$/, loader: 'eslint', exclude: /node_modules/}
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        loaders: ['style-loader', 'css-loader', 'less-loader'],
        exclude: /node_modules/
      },
      {test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url-loader'}
    ],
    noParse: ['react']
  }
};
