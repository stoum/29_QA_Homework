
function testCycle(n) {
    let x = []
    for (i=n; i>=1; i=Math.floor(i/2)) {
        if (i%2) {
            x.unshift(1);
        } else {
            x.unshift(0);
        }
    }
    return x.join('')
}
    testCycle(19)

/*  OR
function testCycle(n) {
x = +(n).toString(2); //Stepik - метод заблокирован
return x
}
testCycle(19)*/