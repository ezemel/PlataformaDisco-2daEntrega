const express = require('express')

const app = express()

const routes = require('./routes/index')

app.use(express.json())

app.use('/', routes)


app.listen(5000, ()=> {
    console.log('Servidor escuchando en el puerto 5000')
})

