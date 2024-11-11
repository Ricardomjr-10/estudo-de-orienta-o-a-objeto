/* class Studante {
    constructor (name, email) {
        this.name = name
        this.emal = email
    }
} */

    function Studante (name, email) { // classe por baixo dos panos
        this.name = name
        this.email = email

        this.login = function () {
            return `${this.name} fez login`
        }
    }

const gabrielFialho = new Studante('Gabriel Fialho', 'gabrielf@rogermelo.com.br')
const brenoLemos = new Studante('Breno lemos', 'brenolemos@rogermelo.com.br')

console.log(gabrielFialho.login(), brenoLemos.login())