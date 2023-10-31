/*нарисуй ромб

         1
        121
       12321
      1234321
     123454321
    12345654321
   1234567654321
  123456787654321
 12345678987654321
1234567890987654321
 12345678987654321
  123456787654321
   1234567654321
    12345654321
     123454321
      1234321
       12321
        121
         1
*/
/*
//Вариант 1 ====Читерский через два consol.log'а и метод repeat====

let n = 10
let str = ""
for (i=1; i<=n; i++) {
    str = ' '.repeat(n-i)
    for (j=1; j<=i; j++){
        str += j %10
    }
    for(k=i-1; k>=1; k--){
        str += k
    }
    console.log(str)
}
for (i=1; i<=n; i++) {
    str = ' '.repeat(n-(n-i))
    for (j=1; j<=n-i; j++){
        str += j
    }
    for(k=n-i-1; k>=1; k--){
        str += k
    }
    console.log(str)
}
*/
/*
//Вариант 2 ====Через один consol.log и стандартные циклы====

let a = 10
let sum = ''
for (i = 1; i <= a; i++) {
    for (j = a; j >= i; j--) {
        sum += ' '
    } 
    for (k = 1; k <= i; k++) {
        sum += k % 10
    } 
    for (l = i - 1; l >= 1; l--) {
        sum += l 
    } 
    sum += '\n'
} 
for (i = a-1; i >= 1; i--) {
    for (let j = a; j >= i; j--) {
        sum += ' '
    } 
    for (k = 1; k <= i; k++) {
        sum += k
    } 
    for (let l = i - 1; l >= 1; l--) {
        sum += l 
    } 
    sum += '\n'
} 
console.log(sum)
*/

/*
2 Нарисуйте елочку
    *
   ***
  *****
 *******
*********
*/
/*
// Вариант 1
let a = 5
let sum = ''
let n = "*"
for (i = 1; i <= a; i++) {
    for (j = a; j >= i; j--) {
        sum += ' '
    } 
    for (k = 1; k <= i; k++) {
        sum += n
    } 
    for (l = i - 1; l >= 1; l--) {
        sum += n 
    } 
    sum += '\n'
} 
console.log(sum)
*/

//Вариант 2    (в процессе)
let a = 5
let sum = ''
let n = "*"
//for (let i = 1; i <= a; i++) {
    //let sum = ''
    // for (let j = a-1; j >= i; j--) {
    //     sum += ' '
    // } 
for (let k = 1; k >= 9; k++) {
        sum = sum + n
} 
    console.log(sum)
    //for (l = i - 1; l >= 1; l--) {
    //    sum += n 
    //} 
    //sum += '\n'
//} 
//console.log(sum)

/*
3. Нарисуйте пирамидку
1 
2 6 
3 7 10 
4 8 11 13 
5 9 12 14 15
*/

