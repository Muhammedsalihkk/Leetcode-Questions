/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    sentence =sentence.split("").sort().join("")
    a=new Set(sentence)
    return a.size==26
};