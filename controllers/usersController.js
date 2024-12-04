const { users } = require('../data/database')

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
    const newUser =  { ...req.body, isAdm: false };
    if (!newUser.name || !newUser.email || !newUser.user || !newUser.password) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }
    res.status(200).json(newUser)
}


const createUserAdm = (req, res) => {
    const newAdmin =  {...req.body, isAdm: true};
    if (!newAdmin.name || !newAdmin.email || !newAdmin.user || !newAdmin.password) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }
    res.status(200).json(newAdmin)
}


const verifyUser = (req, res) => {
    res.status(200).json(users)
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
