const { response } = require('express')
const cursoService = require('../services/CursoService')

module.exports = {
    findAllTurmas: async (req, res) => {

        // Declaração do objeto json que será retornado como resposta da requisição
        let json = { error: "", result: [] }

        // Invocar função que irá consultar o Banco de Dados para listar as turmas
        let cursos = await cursoService.readCursos()

        // Tratamento de dados
        for (let curso of cursos) {
            json.result.push({
                id: curso.id,
                nome: curso.nome,
                quantidade: curso.quantidade
            })
        }

        res.status(200).json(json)
    }
}