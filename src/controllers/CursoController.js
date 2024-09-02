const { response } = require('express')
const cursoService = require('../services/CursoService')

module.exports = {

    // Método para consultar cursos
    findAllTurmas: async (req, res) => {

        // Declaração do objeto json que será retornado como resposta da requisição
        let json = { error: "", result: [] }

        // Invocar função que irá consultar o Banco de Dados para listar as turmas
        let cursos = await cursoService.readCursos()

        // Tratamento de dados do Banco de Dados
        for (let curso of cursos) {
            json.result.push({
                id: curso.id,
                nome: curso.nome,
                quantidade: curso.quantidade
            })
        }

        res.status(200).json(json)
    },

    // Método para cadastrar um curso
    saveCurso: async (req, res) => {

        let json = { error: "", result: {} }

        // Receber dados via corpo da requisição para cadastrar o curso 
        let nome = req.body.nomeCurso

        if (nome) {
            let curso = await cursoService.createCurso(nome)
            json.result = {
                id: curso.insertId,
                nome: nome
            } 
        } else {
            json.error = "Nome do curso é obrigatório"
        }

        res.status(201).json(json)

    }

}