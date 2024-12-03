const express = require('express')

const router = express.Router()
const usersControler = require('../controllers/usersController')

router.get('/', usersControler.getUsers)
router.get('/:id', usersControler.getUserById)

router.post('/registerUser', usersControler.createUser)
router.post('/registerAdm', usersControler.createUserAdm)
router.post('/login', usersControler.verifyUser)

router.put('/updateUser', usersControler.updateUser)
router.put('/updateAdm', usersControler.updateUserAdm)

router.delete('/:id', usersControler.deleteUser)

module.exports = router