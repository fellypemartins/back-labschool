const multer = require('multer')

// Configurar o multer para armazenar os arquivos na memória temporariamente (Buffer)

const storage = multer.memoryStorage()

// Criar uma instância do multer com a configuração do 'storage'

const upload = multer( {storage : storage} )

module.exports = upload