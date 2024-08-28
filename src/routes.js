const express = require('express')
const route = express.Router()
const cors = require('cors')

route.options('*', cors())

route.get('/test', (req, res) => {
    res.json(
        {
            "nome": "Fellype",
            "telefone": "85999999999",
            "curso": "Desenvolvimento de Sistemas"
        }
    )
})

route.get('/free', (req, res) => {
    res.send("<div>Só acredito vendo</div>")
})

module.exports = route