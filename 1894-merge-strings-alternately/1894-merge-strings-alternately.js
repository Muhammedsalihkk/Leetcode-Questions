/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    newOne=""
    length=word1.length>word2.length?word1.length:word2.length
    console.log(length)
    for(i=0;i<length;i++){
        if(word1[i]){
            newOne+=word1[i]
        }
        if(word2[i]){
            newOne+=word2[i]
        }
        
        
    }
    return newOne
};