const { users, getNewId } = require('../data/database')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

const getUsers = (req, res) => {
    res.status(200).json(users)
}

const getUserById = (req, res) => {
    const userId = parseInt(req.params.id)
    
    const user = users.find(u => u.id === userId)

    if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado" });
    }

    res.status(200).json(user);
}

const createUser = (req, res) => {
    const newUser =  req.body
    if (!newUser.name || !newUser.email || !newUser.user || !newUser.password) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    else{
        const userCreated = new User(getNewId(), newUser.name, newUser.email, newUser.user, newUser.password, false)

        users.push(userCreated)
        res.status(200).json(userCreated)
    }
}


const createUserAdm = (req, res) => {
    const newUser =  req.body
    if (!newUser.name || !newUser.email || !newUser.user || !newUser.password) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    else{
        const userCreated = new User(getNewId(), newUser.name, newUser.email, newUser.user, newUser.password, true)

        users.push(userCreated)
        res.status(200).json(userCreated)
    }
}

//Essa é a rota de Login
const verifyUser = (req, res) => {
    const {user, password} = req.body

    const userLogin = users.find(u => u.user === user && u.password === password)

    if(!userLogin) {
        return res.status(401).json({ message: 'Usuário ou senha inválida, tente novamente' });
    }

    else{
        const token = jwt.sign({id: userLogin.id}, process.env.JWT_SECRET, {expiresIn: '1 hr'})
        res.status(200).json({token})
    }
}


const updateUser = (req, res) => {
    const updatedUser = users.updateUser(parseInt(req.params.id, 10), req.body);
    if (!updatedUser) {
        return res.status(404).json({ message: "Usuário não encontrado" });
    }
    res.status(200).json(updatedUser)
}


const updateUserAdm = (req, res) => {
    res.status(200).json(users)
}


const deleteUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const deletedUser = users.find(u => u.id === userId)
    
    if(!deletedUser){
        return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    if(deletedUser.isAdm){
        return res.status(404).json({ message: 'Admins não podem ser deletados' });
    }
    
    res.status(200).json(deletedUser)
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    createUserAdm,
    verifyUser,
    updateUser,
    updateUserAdm,
    deleteUser
}
