function testCycle(k, n) {
    var x = n;
    for (i=1; i<k; i++) {
    x = `${x} ${n}`
}
console.log(x)
}
testCycle(2,5)