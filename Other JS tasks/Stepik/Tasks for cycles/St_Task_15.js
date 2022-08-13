function testCycle(n) {
    let x = 1
    let a = 0
    for (i=1; i<n; i++) {
         trans = x
         x += a
         a = trans
        }
        console.log(x)
    }
    

    testCycle(11)