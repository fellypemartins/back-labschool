const express = require('express')
const route = express.Router()
const cors = require('cors')
const cursoControler = require('./controllers/CursoController')

route.options('*', cors())

// Endpoints
// '/' URI
// (request, response) => {} Função Callback

// Endpoint - CURSO
route.get('/curso', cursoControler.findAllTurmas)



module.exports = route