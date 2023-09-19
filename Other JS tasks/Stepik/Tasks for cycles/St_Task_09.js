
function testCycle(n) {
    let x=n
    for(i=2; i<n; i+=2) {
        x=x*(n-i)
        }
        
    return x
}
testCycle(7)
