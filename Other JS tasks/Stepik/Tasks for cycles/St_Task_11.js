function testCycle(n) {
    
    for (i = 1; i<n; i++) {
           if (i!=1 & i!=n & (n % i == 0)) {
           x = "Составное число"
           break
           } else {
           x = "Простое число"
           }
}
console.log(x)
}
testCycle(9)