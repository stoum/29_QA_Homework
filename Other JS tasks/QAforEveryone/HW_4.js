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

function testCycle(k) {
    
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
testCycle(10)

/*

*/