if(process.env.NODE_ENV === 'production') {
  console.log('node production')
  module.exports = require('./prod')
} else {
  console.log('node development')
  module.exports = require('./dev')
}