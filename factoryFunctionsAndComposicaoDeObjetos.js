//funcao que retorna um novo objeto - factory functions
const creatUser = (name, email) => {
    let counter = 0

    return {
       name,
       email,
       incrementCounter: () => ++counter  
    }
}


//exemplo com classe
class User {
    #counter = 0

    constructor (name, email) {
        this.name =name
        this.email = email
    }

    incrementCounter () {
        return ++this.#counter
    }
}

const user = new User('Roger', 'oi@rogemelo.com.br')
const user2 = creatUser('Roger', 'oi@rogemelo.com.br')
const user3 = creatUser('roger 2', 'oi2@rogermelo.com')

console.log(user, user2)
console.log(user.incrementCounter())
console.log(user2.incrementCounter())
console.log(user2.incrementCounter())
console.log(user3.incrementCounter())
console.log(user3.incrementCounter())

//vantagens da factory function 
//nao te deixa tentado a fazer niveis de herança na aplicacao
//nao precisa dio new
//o comportamento do this volta a ser o padrao
//quanto menos this melhor

//desvantagens
//uma pouco mais lenta - só precisa se for lib ou framwork -
//trabalha em cima da performance percebida