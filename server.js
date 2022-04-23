const express = require('express')
const compression = require('compression')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const api = require('./api')

if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(compression())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'client/build')))
app.use(cors({ origin: '*'}));
app.use('', api)
app.listen(port, error => {
   if (error) throw error
   console.log('Server running on port ' + port)
})

app.get('/service-worker.js', (req, res) => { res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js')) })
app.get('*', function (req, res) { res.sendFile(path.join(__dirname, 'client/build', 'index.html')) })