const getWordStructure = function (word) {
    vowel = 'aeiouy'
    dash = '-'
    countLetter = 0, countDash = 0
    
        for (let a of word.toLowerCase()) {
        if (vowel.includes(a)) {
        countLetter ++ 
            
        } else if (dash.includes(a)){
            countDash ++
        }
        }
        console.log (`In word ${word} are ${countLetter} vowel letters and ${word.length-countLetter-countDash}\
 consonant letters`)
 
}
getWordStructure('Ottollkaa')
getWordStructure('Check---case')
