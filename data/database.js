const User = require('../models/User')

let users = [
    new User(1, 'Gabriel Kenji', 'gabrielkenji@alunos.utfpr.edu.br', 'GabrielKenji', '12345', true),
    new User(2, 'Pedro Lucas', 'pedrolandgraf@alunos.utfpr.edu.br', 'PedroLucas', '54321', true),
    new User(3, 'Adriano Rivolli', 'rivolli@utfpr.edu.br', 'rivolli', 'password', false),
    new User(4, 'João Kleber', 'joaokleber@gmail.com', 'joaokleber', 'joao', false),
    new User(5, 'Rodrigo Faro', 'rodrigofaro@outlook.com', 'rodrigofaro', 'rodrigo', false),
]

const getNewId = () => {
    const ids = users.map(user => user.id)
    const maxId = Math.max(...ids) + 1

    return maxId
}

module.exports = { users, getNewId }