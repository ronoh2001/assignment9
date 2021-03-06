var express = require('express')
var app = express()
var config = require('./config')
console.log(config)
var DB = config.DB
var PORT = config.PORT
var models = require('./models')

app.get('/articles', function(req, res) {
  models.Articles.findAll().then(function (articles) {
    res.json(Articles)
  })
})


models.sequelize.sync({force:true}).then(function(x) {
  models.Articles.create({
    author:'Ron Oh',
    blog:'Hello this is my blog.  I have a lot to catch up on, but this is a beginning.  Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  })
})
  app.listen(PORT, function() {
  console.log('server started')
  console.log('listening on PORT: ' + PORT)
  console.log('DB URI STRING: ' + DB)
  })
