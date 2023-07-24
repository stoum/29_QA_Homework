
function testCycle(a, b) {
    if (a>b) {
    c=a; a=b; b=c
}
let x = String(a)
while (a+1<=b) {
    x = `${x} ${a+1}`
a++
}
    return x;
}
