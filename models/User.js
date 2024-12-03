class User {
    constructor(id, name, email, user, password, isAdm) {
        this.id = id
        this.name = name
        this.email = email
        this.user = user
        this.password = password
        this.isAdm = isAdm
    }
}

module.exports = User