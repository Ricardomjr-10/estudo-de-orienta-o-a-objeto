//  - A invocação da função abaixo deve retornar este objeto:
//     {
//       prop1: 'value1',
//       prop2: 'value2',
//       prop3: 'value3' 
//     }
//   - Descomente o código e crie a função.

const arrayToObj = (array) => {
  const obj = array.reduce((acc, [chave, valor]) => {
    acc[chave] = valor
    return acc
  }, {})
  return obj
}

console.log(
  arrayToObj([
    ['prop1', 'value1'],
    ['prop2', 'value2'],
    ['prop3', 'value3']
  ])
)