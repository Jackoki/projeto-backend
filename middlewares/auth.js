const jwt = require('jsonwebtoken')
const { users } = require('../data/database')

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization']

    const token = authHeader && authHeader.split(' ')[1]

    if(!token){
        return res.status(401).json({message: 'Acesso negado'})
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err){
            return res.status(403).json({ message: 'Token inválido!' });
        }

        req.user = user;
        next();
    })
}

const isAdm = (req, res, next) => {
    verifyToken(req, res, (err) => {
        if(err) {
            return res.status(401).json({message: 'Acesso negado'})
        }

        if(!req.user.isAdm) {
            return res.status(403).json({message: 'Acesso negado: apenas administradores pode realizar a ação'})
        }

        next();
    })
}

const userIsAdmOrHimself = (req, res, next) => {
    verifyToken(req, res, (err) => {

        const idUserToBeUpdated = req.body.id
        const idUserMakingUpdate = req.user.id
        const isAdm = req.user.isAdm

        if(err) {
            return res.status(401).json({message: 'Acesso negado'})
        }

        if(!isAdm || (idUserToBeUpdated !== idUserMakingUpdate)) {
            return res.status(403).json({message: 'Acesso negado: apenas administradores pode realizar a ação'})
        }

        next();
    })
}




module.exports = { verifyToken, isAdm, userIsAdmOrHimself }
