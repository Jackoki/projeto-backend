const express = require('express')
const usersRoutes = require('./routes/usersRoutes')

const app = express()

app.use(express.json())

app.use('/users', usersRoutes)

app.listen(4000, () => console.log("Servidor rodando na porta 4000"))