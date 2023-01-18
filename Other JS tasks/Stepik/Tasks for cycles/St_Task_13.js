
function testCycle(n) {
    let x = 0
    let array = Array.from(n.toString(), Number)
    array.forEach((el) => {
    x += el
    })
return x
}
testCycle(193)
