
const degreeOfTwo = function(degree) {
    if (degree >= 1 && typeof (degree) != 'boolean') {
        i = 1
        while (i <= degree) {
        console.log (`2 in degree ${i} = ${2**i}`)
        i++
        }
    } else {
        console.log ('Please, enter number more or equal 1')
    }
}
degreeOfTwo (5)
degreeOfTwo (0)
degreeOfTwo (true)
degreeOfTwo ('5')
degreeOfTwo ('jj')
