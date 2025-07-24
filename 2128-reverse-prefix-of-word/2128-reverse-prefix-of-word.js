/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    if(!word.includes(ch)) return word
    a=word.substr(0,word.indexOf(ch)+1).split("").reverse().join("")
    a+=word.substr(word.indexOf(ch)+1)
    return a
};