//funcao que retorna um novo objeto - factory functions


//exemplo com classe
class User {
    constructor (name, email) {
        this.name =name
        this.email = email
    }
}

const user = new User('Roger', 'oi@rogemelo.com.br')

console.log(user)