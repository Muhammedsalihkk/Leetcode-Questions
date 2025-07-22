/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    c=word[0].toUpperCase()
    if(word[0]==word[0].toUpperCase()&&word.substr(1,word.length-1)==word.substr(1,word.length-1).toLowerCase()){
        return true
    } 
    if(word==word.toUpperCase()) return true

    if(word==word.toLowerCase()) return true

    return false
};