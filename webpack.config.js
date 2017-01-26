var webpack = require('webpack');

var PROD = JSON.parse(process.env.PROD_ENV || '0');

module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/js/bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  plugins: PROD ? [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ] : [],
  devtool: 'cheap-module-eval-source-map'
};
