/*
Напишите программу калькулятора с If  или switch,
обработайте возможные ошибки ввода (/0) или любые другие
*/

// "use strict"
// Calculator
//можно через switch - 4 оператора

let num_1 = Number(prompt ("Please, enter first number"))
let num_2 = Number(prompt ("Please, enter second number"))
let result

let operator = prompt("Plese, enter operator: \n + \n - \n * \n /")

if (operator == "+") {
  result = num_1 + num_2
  document.write(`Summ result: ${result}`)

} else if (operator == "-") {
  result = num_1 - num_2
  document.write(`Difference result: ${result}`)

} else if (operator == "/") {
      if (num_2 == 0) {
          document.write("Warning! Division by Zero!")
      } else {
         result = num_1 / num_2
         document.write(`Division result: ${result}`)
      }

} else if (operator == "*") {
  result = num_1 * num_2
  document.write(`Multiplication result: ${result}`)

} else {
  document.write("I don't know this operator")
}
