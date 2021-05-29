const express = require('express')

//Carrefa variavel de ambiente
require('dotenv').config()

const InicializaMongoServer = require("./config/db")

//Inicializa MongoDB
InicializaMongoServer() 

//Definindo rota do backend
const rotasCategoria = require('./routes/Categoria')

//Inicializa o app a partir do express
const app = express()

//Remover x-powered-by por segurança
app.disable('x-powered-by')

//Porta default do backend
const PORT = 4000

//Define que o backend fará o parse do JSON
app.use(express.json())

//Define primeira rota
app.get('/', (req, res) => {
    res.json({mensagem: 'API Funcionado',
              versao:'1.0.0'})
})

//Rotas das categorias
app.use("/categorias", rotasCategoria)


//Rota tratar erros 404 (Ultima sempre)
app.use(function (req,res){
    res.status(404).json({
        mensagem: `A rota ${req.originalUrl} não existe`
    })
})

app.listen(PORT, (req, res) => {
    console.log(`Servidor rodando na porta ${PORT}`)
})