function Studante(name, email) { // classe por baixo dos panos
    this.name = name
    this.email = email
}

Studante.prototype.login = function login() {
    return `${this.name} fez login`
}

Studante.prototype.comment = function comment() {
    return `${this.name} comentou`
}

const gabrielFialho = new Studante('Gabriel Fialho', 'gabrielf@rogermelo.com.br')
const brenoLemos = new Studante('Breno lemos', 'brenolemos@rogermelo.com.br')

console.log(gabrielFialho, brenoLemos)