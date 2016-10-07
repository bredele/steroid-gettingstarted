/**
 * Server depdencies.
 */

var fs = require('fs')
var steroid = require('steroid')
var server = require('express')()


server.use('/:title', (req, res) => {
  steroid`
    ${header(req.params.title)}
    ${article}
    ${footer}
  `.pipe(res)
})

function header(title) {
  return steroid`<h1>Hello ${title || 'World'}!</h1>`
}

function footer() {
  var authors = ['Olivier', 'Klara']
  return steroid`
  <ul>${authors.map(author => steroid`<li>${author}</li>`)}</ul>
  `
}

function article() {
  return steroid`
  <p>${fs.createReadStream(__dirname + '/lorem.txt')}</p>
  `
}


server.listen(8000)
