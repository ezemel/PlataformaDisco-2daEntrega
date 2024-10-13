const express = require('express')
const router = express.Router()

router.get('/',(req, res)=>{
    res.status(200).send('Hello World!')
})

router.get('/chau',(req, res)=>{
    res.status(200).send('chau chau')
})

router.get('/prueba',(req, res)=>{
    res.status(200).send({nombre: 'Juan', apellido: 'Perez'})
})

module.exports = router
