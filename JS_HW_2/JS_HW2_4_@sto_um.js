
const printSmile = function(stroka, numberOfRows) {

    let stroka1 = String (stroka)

for (let i = 0; i < numberOfRows; i++) {
	
    console.log(stroka)
    stroka += stroka1
}
}

printSmile(5, 5)
printSmile('=^=', 5)
printSmile(true, 5)
