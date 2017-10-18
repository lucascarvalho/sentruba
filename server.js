const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')

const PORT = 3000

new WebpackDevServer(webpack(config), {
  headers: {
    'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Origin': '*'
  },
  historyApiFallback: true,
  hot: true,
  publicPath: config.output.publicPath,
  stats: {colors: true}
}).listen(PORT, 'localhost', (err) => {
  if (err) {
    console.log(err) // eslint-disable-line no-console
  }

  console.log('Listening at localhost:3000') // eslint-disable-line no-console
})
