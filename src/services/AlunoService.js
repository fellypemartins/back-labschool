// Importação do database.js
const { resolve } = require('path')
const database = require('../database')

module.exports = {

    // Consultar Alunos
    readAlunos: () => {
        return new Promise((resolve, reject) => {
            database.query('SELECT aluno.id, aluno.nome, aluno.telefone, aluno.email, aluno.data_nascimento, curso.nome AS curso_nome FROM aluno INNER JOIN curso ON aluno.fk_curso = curso.id', (err, result) => {
                if (err) {
                    reject(err)
                    return
                } 
                return resolve(result)
            })
        })
    },

    // Criar Aluno
    createAluno: (foto, nome, telefone, email, data_nascimento, curso) => {
        return new Promise((resolve, reject) => {
            database.query(`INSERT INTO aluno VALUES (null, ?, ?, ?, ?, ?, ?)`, [foto, nome, telefone, data_nascimento, curso, email], (err, result) => {
                if (err) {
                    reject(err)
                    return
                }
                return resolve(result)
            })
        })
    },

    // Consultar Aluno pelo Id
    getAlunoById: (id) => {
        return new Promise((resolve, reject) => {
            database.query(`SELECT * FROM aluno WHERE id = ${id}`, (err, result) => {
                if (err) {
                    reject(err)
                    return
                }   
                return resolve(result)
            })
        })
    },

    // Deletar Aluno
    deleteAluno: (id) => {
        return new Promise((resolve, reject) => {
            database.query(`DELETE FROM aluno WHERE id = ${id}`, (err, result) => {
                if (err) {
                    reject(err)
                    return
                }
                return resolve(result)
            })
        })
    }
}