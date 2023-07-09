const express = require('express')
const app = express()
require('dotenv').config()
app.get('/', (req, res) => {res.send('hello world!')})


app.get('*',(req, res) => {
    res.status(404)('<h1>It seems this page does not exist</h1>')
})
app.listen(process.env.PORT)

