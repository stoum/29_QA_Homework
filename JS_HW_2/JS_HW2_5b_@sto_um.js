const getWordStructure = function (word) {
    vowel = 'aeiouy'
    count = 0
    word = word.toLowerCase()
        for (let a of word) {
            if (vowel.includes(a)) {
            count ++ 
            }
        }
        console.log (`In word ${word} are ${count} vowel letters and ${word.length-count}\
 consonant letters`)
 
}
getWordStructure('Ottollkaa')