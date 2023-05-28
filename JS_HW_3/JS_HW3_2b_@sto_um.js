 //Реализуйте считывание JSONки из файла task2.json с помощью, например, модуля fs. для дальнейшего
 //использования в функции, описанной в задании

const fs = require('fs');
const users = JSON.parse(fs.readFileSync("./task2.json")) 

let uniques = Array.from(new Set(users.map(item => JSON.stringify(item)))).map(item => JSON.parse(item))

console.log(uniques)
