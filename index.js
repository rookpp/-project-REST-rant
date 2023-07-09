const express = require('express')
const app = express()
require('dotenv').config()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine() )

app.use('/places',require('./controllers/places'))
app.get('/', (req, res) => {res.render('Home')})


app.get('*',(req, res) => {
    res.send('<h1>It seems this page does not exist</h1>')
})
app.listen(process.env.PORT)

