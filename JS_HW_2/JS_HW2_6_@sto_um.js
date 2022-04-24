
function isPalindrom(word) {

    word = word.toLowerCase()
    if (word === word.split("").reverse().join("")) {
        
        console.log(`${word} is Palindrom`)
    
    } else {
        console.log(`${word} is not Palindrom`)
    }
}
     
isPalindrom("Wallaw")
isPalindrom("Wawllaw")
