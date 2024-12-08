//Importação de frameworks no projeto, uso de dotenv para o auth.
require('dotenv').config();
const express = require('express')
const usersRoutes = require('./routes/usersRoutes')
const countriesRoutes = require('./routes/countriesRoutes')
const citiesRoutes = require('./routes/citiesRoutes')

const app = express()

app.use(express.json())

//O servidor rodará na porta 4000, tendo 3 rotas principais, /users, /countries, /cities.
app.use('/users', usersRoutes)
app.use('/countries', countriesRoutes)
app.use('/cities', citiesRoutes)

app.listen(4000, () => console.log("Servidor rodando na porta 4000"))