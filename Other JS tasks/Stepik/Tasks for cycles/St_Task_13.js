function testCycle(n) {
    let x = 0
    let array = Array.from(n.toString(), Number)
    array.forEach((el) => {
    x += el
    })
console.log(x)
}
testCycle(193)