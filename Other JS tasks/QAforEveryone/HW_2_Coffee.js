/*
2.1 Напишите следующую программу:
- У клиента должен быть выбор из двух(или трех) видов кофе ( на ваш выбор).
- Дайте названия вашим видам кофе.
- Установите цену на кофе в зависимости от величины стаканчика( small, medium, big).
- Выведите на экран название, затем рецепт выбранного кофе (используйте переменные для изменения рецепта и названия) и его стоимость (в зависимости от размера стаканчика). 
- Компоненты кофе не влияют на стоимость.
- Используйте подходящую комбинацию условий if, (else if), else для решения задачи.
*/

// "use strict"

// Run by index.HTML

let coffeeNumber = prompt("What coffee do you choose? \n 1 - Americano \n 2 - Kappucino \n 3 - Latte \n Please, enter number 1, 2 or 3")
let cupNumber = prompt("What cup size do you prefer? \n 1 - Big \n 2 - Medium \n 3 - Small \n Please, enter number 1, 2 or 3")

let cupSize = "small"
let milk = "Pour frothed milk into a cup"
let coffeeName = "Latte"
let cupPrice = 5

if (coffeeNumber == 1) {
   coffeeName = "Americano"
   milk = "Sorry, your coffee without milk"
   } else if (coffeeNumber == 2) {
   coffeeName = "Kappucino"
   milk = "Pour warm whipped milk into a cup" 
   }

 if (cupNumber == 1) {
   cupSize = "big"
   cupPrice *= 2
} else if (cupNumber == 2) {
   cupSize = "medium"
   cupPrice *= 1.5
}

let step_1 = `1.Put ${cupSize} cup on the table.`
let step_2 = '2.Put coffee in a cup.'
let step_3 = '3.Put sugar in a cup.'
let step_4 = '4.Pour hot water into a cup.'
let step_5 = `5.${milk}.`
document.write(`<br> <br> How to prepare a cup of ${coffeeName} coffee: <br> <br> ${step_1} <br> ${step_2} <br> ${step_3} <br> ${step_4} <br> ${step_5} <br> <br> Your coffee ready! <br> ${cupPrice}$ from you`)
