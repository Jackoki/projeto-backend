const express = require('express')
const app = express()

app.listen(4000, () => console.log("Servidor rodando na porta 4000"))

app.get("/", (request, response) => {
    console.log("Conectado na porta 4000")
})