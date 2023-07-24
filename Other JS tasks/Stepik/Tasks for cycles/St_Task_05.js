
function testCycle(a, b) {
    if (a>b) {
    c=a; a=b; b=c
}
let x = String(b)
while (a+1<=b) {
    x = `${x} ${b-1}`
b--
}
    return x;
}
testCycle(1, 18)
