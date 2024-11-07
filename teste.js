class Carro {
    constructor(marca, modelo, ano, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.ligado = false;
    }

    ligar() {
        this.ligado = true;
        console.log('O carro está ligado.');
    }

    desligar() {
        this.ligado = false;
        console.log('O carro está desligado.');
    }

    acelerar() {
        if (this.ligado) {
            console.log('O carro está acelerando.');
        } else {
            console.log('O carro precisa estar ligado para acelerar.');
        }
    }
}

const meuCarro = new Carro('Honda', 'Civic', 2023, 'Prata');
const carroAmigo = new Carro('Toyota', 'Corolla', 2022, 'Branco');

meuCarro.ligar();
meuCarro.acelerar();
meuCarro.desligar();

carroAmigo.acelerar(); // O carro precisa estar ligado para acelerar.
carroAmigo.ligar();
carroAmigo.acelerar();

/* Exercício de Orientação a Objetos em JavaScript: Criando um Carro
Descrição:

Vamos criar uma classe para representar um carro. Um carro possui características como marca, modelo, ano e cor, e pode realizar ações como ligar, desligar e acelerar.

Passo a Passo:

Crie a classe Carro:

JavaScript */
class Carro {
    constructor(marca, modelo, ano, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.ligado = false;
    }

    ligar() {
        this.ligado = true;
        console.log('O carro está ligado.');
    }

    desligar() {
        this.ligado = false;
        console.log('O carro está desligado.');
    }

    acelerar() {
        if (this.ligado)   
 {
            console.log('O carro está acelerando.');
        } else {
            console.log('O carro precisa estar ligado para acelerar.');
        }
    }
}


/* Crie instâncias da classe:

JavaScript
const meuCarro = new Carro('Honda', 'Civic', 2023, 'Prata');
const carroAmigo = new Carro('Toyota', 'Corolla', 2022, 'Branco');
Use o código com cuidado.

Utilize os métodos:

JavaScript
meuCarro.ligar();
meuCarro.acelerar();
meuCarro.desligar();

carroAmigo.acelerar(); // O carro precisa estar ligado para acelerar.
carroAmigo.ligar();
carroAmigo.acelerar();
Use o código com cuidado.

Explicação:

Classe Carro: Define um modelo para criar objetos do tipo carro.
Construtor: Inicializa os atributos (marca, modelo, ano, cor e ligado) de um novo objeto carro.
Métodos: São as ações que um carro pode realizar (ligar, desligar e acelerar).
Instâncias: meuCarro e carroAmigo são objetos específicos criados a partir da classe Carro.
Desafio:

Adicione um método frear() que imprime uma mensagem informando que o carro está freando.
Adicione um atributo velocidade e um método alterarVelocidade() para aumentar ou diminuir a velocidade do carro.
Crie uma classe Caminhao que herde da classe Carro e adicione um atributo cargaMaxima.
Dicas:

Encapsulamento: Mantenha os atributos privados e use métodos para acessá-los e modificá-los.
Herança: Crie classes mais específicas a partir de classes mais genéricas.
Polimorfismo: Utilize métodos com o mesmo nome em classes diferentes para realizar tarefas diferentes.
Este exercício te ajudará a entender os conceitos básicos da orientação a objetos em JavaScript, como classes, objetos, atributos e métodos.

Gostaria de mais um exercício ou precisa de mais explicações sobre algum ponto específico?

Outras ideias de exercícios:

Criar uma classe Pessoa com atributos como nome, idade e endereço.
Criar uma classe ContaBancaria com métodos para depositar, sacar e consultar o saldo.
Criar uma classe FormaGeometrica com métodos para calcular área e perímetro.
Lembre-se que a prática é fundamental para aprender programação orientada a objetos. Quanto mais você exercitar, mais fácil se tornará. */