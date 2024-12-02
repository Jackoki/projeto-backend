const express = require('express')

const router = express.Router()
const usersControler = require('../controllers/usersController')

router.get('/', usersControler.getUsers)
router.get('/:id', usersControler.getUserById)
router.post('/', usersControler.createUser)
router.put('/:id', usersControler.updateUser)
router.delete('/:id', usersControler.deleteUser)