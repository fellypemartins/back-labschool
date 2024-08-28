require('dotenv').config({ path: 'variaveis.env' })

// Importação de Módulos
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes')

const server = express()
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())
server.use(cors())
server.use('/api', routes)

//process.env. é a forma de acessar as variaveis no arquivo.env
server.listen(process.env.PORT_SERVER, () => {
    console.log(`Servidor rodando em http://localhost:${process.env.PORT_SERVER}`)
})