const express = require('express')
const router = express.Router()
const multer = require('multer')

//Definindo a pasta padrão de upload
const upload = multer({
    dest: './public/upload'
})

//POST /upload 
//Salvar img recebida via upload

router.post('/', upload.array('file'), 
async(req,res) => {
    console.log(`Arquivos recebidos: ${res.files.lenght}`)
    const statusUpload = req.files.lenght > 0 ? true : false
    res.send({
        upload: statusUpload,
        files: req.files
    })
})

module.exports = router