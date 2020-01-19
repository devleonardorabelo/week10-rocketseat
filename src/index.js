const express  = require('express')
const mongoose = require('mongoose')
const port     = 21068
const app      = express()
const routes   = require('./routes')

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/semana10rocketseat',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(routes)

app.listen(port, () =>  {
    console.log(`connected in port: ${port}`)
})