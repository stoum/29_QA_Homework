//1.При помощи цикла for выведите чётные числа от 2 до 10
/*
for (i=2; i < 10; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}
*/

/*
2.Напишите код, который выводит все простые числа из интервала от 2 до n.
Для n = 10 результат должен быть 2,3,5,7.
*/
/*
function simpleNumber(k) {
    
    for (n=2; n<k; n++) {
        for (i=2; i<=n; i++) {
          if ((n%i==0) && i!=n) {
            x="composite"
            break
          } else {
            x="simple"
          }
        }
        if (x == "simple") {
          console.log(n)
        }
        }
}
simpleNumber(10)
*/

/*
Имеется зашифрованное предложение 
“Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr”
мы знаем, что оно означает “You are the best QA ever”.
Нам нужно придумать программу дешифратор.
*/

/*
let text = "Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr"
let newText = ""
for (i=0; i < text.length; i+=3) {
    newText = newText+text[i]
}
console.log(newText)
*/

