//1.При помощи цикла for выведите чётные числа от 2 до 10
/*
for (i=2; i < 10; i+=2) {
      console.log(i)
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
3.Имеется зашифрованное предложение 
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

// 4.Придумайте свой собственный шифр, а также программу, которая будет шифровать и затем дешифровщик к нему
/*
function coderDecoder(text){

code = ""
noise_1 = "%//&&\'"
noise_2 = "a_//\'bel"
for (i=0; i<text.length; i++){
  code += noise_1+text[i]+noise_2
}
console.log(code)

unCode = ""
for(a=6; a<code.length; a+=15){
  unCode += code[a]
}
console.log(unCode)
}

coderDecoder('QAForEveryone is the best!')
*/
/*
5.У вас есть массив со скобками, предположим 
[ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’] количество элементов и последовательность может быть разной.
Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая)
*/
/*
const arr = ['(', ')', '(', 7, 'u', ')', ')']
countOpen = 0;
countClose = 0;
for (i=0; i<arr.length; i++){
  if (arr[i] == '('){
    countOpen += 1
  } else if (arr[i] == ')') {
    countClose +=1
  }
}
if (countClose == countOpen) {
  console.log ("All brackets have a pair")
} else if (countClose < countOpen) {
  console.log ("More open brackets")
} else {
  console.log ("More close brackets")
}
*/
