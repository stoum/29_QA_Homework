function testCycle(k, n) {
    let x = n;
    for (i=1; i<k; i++) {
    x = `${x} ${n}`
}
return x
}
testCycle(2,5)