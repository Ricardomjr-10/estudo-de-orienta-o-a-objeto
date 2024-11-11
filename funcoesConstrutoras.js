/* class Studante {
    constructor (name, email) {
        this.name = name
        this.emal = email
    }

    comment () {
        return `${this.name} comentou`
    }
}
 */
    function Studante (name, email) { // classe por baixo dos panos
        this.name = name
        this.email = email

    }

    Studante.prototype.login = function () {
        return `${this.name} fez login`
    }

    Studante.prototype.comment = function () {
        return `${this.name} comentou`
    } 
        
    Studante.formatDataBase = function (aString) {
        return aString
        .toUpperCase()
        .replaceAll(' ', '_')
    }
   

const gabrielFialho = new Studante('Gabriel Fialho', 'gabrielf@rogermelo.com.br')
const brenoLemos = new Studante('Breno lemos', 'brenolemos@rogermelo.com.br')

console.log(gabrielFialho.login(), brenoLemos.comment())
console.log(gabrielFialho, brenoLemos)
console.log(Studante.formatDataBase('string para o banco de dados'))

//prototypes
console.log([].includes())