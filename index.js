const express = require('express')
const app = express()
require('dotenv').config()
const methodOverride = require('method-override')


app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use('/places',require('./controllers/places'))
app.get('/', (req, res) => {res.render('Home')})


app.get('*',(req, res) => {
    res.render('error404')
})
app.listen(process.env.PORT)

