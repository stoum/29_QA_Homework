function testCycle(a, b) {
    let x = String(a)
while (a+1<=b) {
    x = `${x} ${a+1}`
a++;
}
    return x;
}
testCycle(5, 28)