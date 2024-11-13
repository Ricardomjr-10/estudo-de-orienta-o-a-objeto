/*   - Crie um objeto com um método getColor. Este método deve retornar o valor da
    propriedade 'color' dos objetos descritos abaixo;
  - Crie 2 novos objetos que representem dois carros. Na criação dos objetos, 
    faça o objeto com o método getColor ser prototype desses dois carros;
  - Após criar os carros, crie neles as propriedades 'color'. Atribua valores 
    diferentes para a propriedade color de cada carro;
  - Teste o método getColor do prototype dos carros.
*/ 

const obj = {
  getColor: function() {
    return this.color
  }
}

const carro1 = Object.create(obj)
carro1.color = 'white'

const carro2 = Object.create(obj)
carro2.color = 'black'

console.log(carro1.getColor())
console.log(carro2.getColor())