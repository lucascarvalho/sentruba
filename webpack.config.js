/* global process */
/* eslint no-process-env: 0 */
const path = require('path')
const webpack = require('webpack')
const rootAssetPath = './src'

const config = {
  entry: {app: [`${rootAssetPath}/index`]},

  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
        use: ['babel-loader']
      },
      {
        test: /\.scss?$/,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'sass-loader'
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: ['url-loader?limit=10000&mimetype=application/font-woff']
      },
      {
        test: /\.(ttf|eot|svg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: ['file-loader']
      }
    ]
  },

  output: {
    filename: 'sentruba.js',
    path: path.resolve('./dist/')
  },

  plugins: [],

  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'node_modules')
    ]
  }

}

console.log('process.env.NODE_ENV', process.env.NODE_ENV) // eslint-disable-line no-console
if (process.env.NODE_ENV === 'development') {
  config.entry.app.unshift(
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch'
  )
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
  config.output.publicPath = 'http://localhost:3000/assets/bundles/'
}
module.exports = config
