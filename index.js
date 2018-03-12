const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')) // redirect bootstrap JS
  .use('/js', express.static(__dirname + '/node_modules/jquery/dist')) // redirect JS jQuery
  .use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')) // redirect CSS bootstrap
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
