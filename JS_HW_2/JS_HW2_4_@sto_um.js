
/* Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик),
а также количество строк для вывода e.g. function printSmile(stroka, numberOfRows) */

const printSmile = function(stroka, numberOfRows) {

    let stroka1 = String (stroka)

for (let i = 0; i < numberOfRows; i++) {
	
    console.log(stroka)
    stroka += stroka1
}
}

printSmile(5, 5)
printSmile('=^=', 5)
printSmile(true, 5)
