require('dotenv').config();
const express = require('express')
const usersRoutes = require('./routes/usersRoutes')
const countriesRoutes = require('./routes/countriesRoutes')

const app = express()

app.use(express.json())

app.use('/users', usersRoutes)
app.use('/countries', countriesRoutes)
app.use('/cities', countriesRoutes)

app.listen(4000, () => console.log("Servidor rodando na porta 4000"))