class Carro  {
    constructor (marca, modelo, ano, cor, velocidade) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.cor = cor
        this.velocidade = velocidade
        this.ligado = false
        this.emMovimento = false
    }

    ligar () {
        this.ligado = true
        console.log('Carro está ligado')
    }

    desligar () {
        this.ligado = false
        console.log('Carro desligado')
    }

    acelerar () {
        if (this.ligado=true) {
            console.log('O carro está acelerando')
        } else {
            console.log('O carro precisa estar ligado para acelerar')
        }
    }

    movimento () {
        if (this.emMovimento=true) {
            console.log('Carro em moviento')
        } else {
            console.log('O carro precisa estar ligado e acelerando')
        }
    }

    frear () {
        console.log('O carro está freando')
    }

    velocity () {
     if (this.emMovimento =true) {
        this.velocidade += 10
        console.log(`O ${this.marca} ${this.modelo} está à ${this.velocidade}KM/H`)
    } else {
         console.log(`O ${this.marca} ${this.modelo} está à ${this.velocidade}KM/H`)

     }
    }
    
}

class Caminhao extends Carro {
   constructor (marca, modelo, ano, cor, velocidade, cargaMaxima) {
    super(marca, modelo, ano, cor, velocidade) 
    this.cargaMaxima = cargaMaxima
   }

   ligar () {
    this.ligado = true
    console.log('Caminhão está ligado')
}
}

const myCar = new Carro('chevrolet', 'onix', 2019, 'branco', 80)
const carFriend = new Carro('volksvagem', 'crossFox', 2011, 'vermelho', 120)

const myCaminhao = new Caminhao('volvo', 'xc40', 2024, 'blue', 70, 10 + "T")

console.log(myCaminhao)
myCaminhao.ligar()


myCar.ligar()
myCar.acelerar()
myCar.movimento()
myCar.velocity()




