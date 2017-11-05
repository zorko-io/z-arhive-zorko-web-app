var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ZORKO_API_BASE_URI: JSON.stringify('http://localhost:3000')
})
