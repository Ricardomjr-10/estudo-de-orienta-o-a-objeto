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
            console.log(`A pessoa ${this.nome} está caminhando`)
        } else {
            console.log(`${this.nome} está parado`)
        }
    }
}

const person = new Pessoa ('Ricardo', 40, 70, 1.80)
person.caminhando =true
person.caminhar()