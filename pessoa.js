class Pessoa {
    constructor (nome, idade, peso, altura) {
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.caminhando = false
    }

    caminhar () {
        if (this.caminhando === true) {
            console.log(`${this.nome} está caminhando`)
        } else {
            console.log(`${this.nome} está parado`)
        }
    }

    caracteristicas () {
        console.log(`${this.nome} tem ${this.idade} anos de idade, pesa ${this.peso}kg e mede ${this.altura}m de altura`)
    }
}

const person = new Pessoa ('Ricardo', 40, 70, 1.81)
person.caminhando =true
person.caminhando =false
person.caminhar()
person.caracteristicas()