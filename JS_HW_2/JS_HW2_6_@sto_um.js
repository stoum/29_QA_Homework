
function isPalindrom(word) {

    if (word.toLowerCase() === word.toLowerCase().split("").reverse().join("")) {
        
        console.log(`${word} is Palindrom`)
    
    } else {
        console.log(`${word} is not Palindrom`)
    }
}
     
isPalindrom("Wallaw")
isPalindrom("Wawllaw")
