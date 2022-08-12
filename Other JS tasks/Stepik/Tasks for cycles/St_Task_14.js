
function testCycle(n) {
    var x = []
    for (i=n; i>=1; i=Math.floor(i/2)) {
        if (i%2) {
            x.unshift(1);
        } else {
            x.unshift(0);
        }
    }
    console.log(x.join(''))
    //return x.join('');
}
    testCycle(19)

/*  OR
function testCycle(n) {
x = +(n).toString(2); //Stepik - метод заблокирован
console.log(x)
}
testCycle(19)*/