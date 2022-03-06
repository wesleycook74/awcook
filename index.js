const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use('/images', express.static(__dirname + '/public/images'))
  .use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')) // redirect bootstrap JS
  .use('/js', express.static(__dirname + '/node_modules/jquery/dist')) // redirect JS jQuery
  .use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')) // redirect CSS bootstrap
  .use('/css', express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss'))
  .use('/css', express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free/scss/brands.scss'))
  .use('/css', express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free/scss/solid.scss'))
  .use('/css', express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free/scss/regular.scss'))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/*', (req, res) => {
    sections = req.originalUrl.split("/")
    main = sections[1]
    sub = sections[2]
    console.log(sub)
    res.render(('pages' + req.originalUrl), { originalUrl : req.originalUrl, main: main, sub: sub });
  })
  
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
