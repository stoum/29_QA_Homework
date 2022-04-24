const getWordStructure = function (word) {
    vowel = 'aeiouyAEOIUY'
    pos = 0
    count = 0
    i=0
        while (i < word.length){
            
            pos += word[i]
                
                if (vowel.indexOf(word[i]) > -1){
                    count ++
                    i++ 
                } else {
                    i++
                }
        }  
        console.log (`In word ${word} are ${count} vowel letters and ${word.length-count}\
 consonant letters`)
}
getWordStructure('Ottollkaa')