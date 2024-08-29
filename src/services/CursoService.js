const database = require('../database')

module.exports = {
    //Ler Cursos
    readCursos: () => {
        return new Promise((resolve, reject) => {
            database.query('SELECT * FROM curso', (err, result) => {
                if (err) {
                    reject(err)
                    return
                }
                return resolve(result)
            })
        })
    },

    //Criar Cursos
    createCursos: (nome) => {
        return new Promise((resolve, reject) => {
            database.query(`INSERT INTO curso VALUES (null, ${nome}, null)`, (err, result) => {
                if (err) {
                    reject(err)
                    return
                }
                return resolve(result)
            })
        })
    }
}