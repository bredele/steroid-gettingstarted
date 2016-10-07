/**
 * Server depdencies.
 */

var fs = require('fs')
var steroid = require('steroid')
var server = require('express')()


server.use('/simple', (req, res) {
  var name = 'World'
  steroid`<h1>Hello ${name}!</h1>`
})


server.listen(8000)
