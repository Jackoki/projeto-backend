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
    const User = createUser(req.body);
    User.isAdmin = false;
    if (!User.name || !User.email || !User.user || !User.password) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }
    res.status(200).json(users)
}


const createUserAdm = (req, res) => {
    const User = createUser(req.body);
    User.isAdmin = true;
    if (!User.name || !User.email || !User.user || !User.password) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }
    res.status(200).json(users)
}


const verifyUser = (req, res) => {
    res.status(200).json(users)
}


const updateUser = (req, res) => {
    res.status(200).json(users)
}


const updateUserAdm = (req, res) => {
    res.status(200).json(users)
}


const deleteUser = (req, res) => {
    const deletedUser = deleteUser(parseInt(req.params.id, 10));
    
    if(!deletedUser){
        return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    if(deletedUser.isAdmin){
        return res.status(404).json({ message: 'Admins não podem ser deletados' });
    }
    
    res.status(200).json(users)
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
