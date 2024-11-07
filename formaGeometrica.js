class Retangulo {
    constructor (base, altura) {
        this.base = base
        this.altura = altura
    }

    area () {
        return this.base * this.altura
    }

    perimetro () {
        return 2 * this.area()
    }
}

const retangulo = new Retangulo (5,10)

console.log(retangulo)
console.log(retangulo.area())
console.log(retangulo.perimetro())