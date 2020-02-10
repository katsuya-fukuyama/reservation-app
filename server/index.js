const express = require('express')
const mongoose = require('mongoose')
const config = require('./config')
const SampleDb = require('./sample-db')

const productRoutes = require('./routes/products')
const path = require('path')

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(
  () => {
    if(process.env.NODE_ENV !== 'production') {
      const sampleDb = new SampleDb()
      // sampleDb.initDb()
    }
  }
)

const app = express()

app.use('/api/v1/products', productRoutes)

// app.get('/products', function(req, res) {
//   res.json({ 'success': true })
// })
if(process.env.NODE_ENV === 'production') {
  const appPath = path.join(__dirname, '..', 'dist', 'reservation-app')
  app.use(express.static(appPath))
  app.get("*", function(req, res) {
    res.sendFile(path.resolve(appPath, 'index.html'))
  })
}

const PORT = process.env.PORT || '3001'

app.listen('3001', function() {
  console.log('running server...')
})

// const express = require('express')
// const mongoose = require('mongoose');
// const config = require('./config/dev');
// const SampleDb = require('./sample-db')

// const productRoutes = require('./routes/products')


// mongoose.connect(config.DB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   }).then(
//     () => {
//       const sampleDb = new SampleDb()
//       // sampleDb.seeDb()
//       sampleDb.initDb()
//       // sampleDb.pushProuctsToDb()
//     }
//   )

// const app = express()

// app.use('/api/v1/products', productRoutes)

// // app.get('/products', function(req, res) {
// //   res.json({'success': true})
// // })

// const PORT = process.env.PORT || '3001'

// app.listen(PORT, function() {
//   console.log('I am running')
// })

