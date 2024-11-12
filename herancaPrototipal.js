function Student(name, email) { // classe por baixo dos panos
    this.name = name
    this.email = email
}

Student.prototype.login = function login() {
    return `${this.name} fez login`
}

Student.prototype.comment = function comment() {
    return `${this.name} comentou`
}
//herda da funcçã construtora Student
function TeacherAssistant (name, email, scheduledWeekPosts) {
    Student.call(this, name, email)//chamndo o this da student
    this.scheduledWeekPosts = scheduledWeekPosts
}

const gabrielFialho = new Student('Gabriel Fialho', 'gabrielf@rogermelo.com.br')
const brenoLemos = new Student('Breno lemos', 'brenolemos@rogermelo.com.br')

const arthurSouza = new TeacherAssistant('artur', 'ar@.com')

console.log(gabrielFialho, brenoLemos, arthurSouza)