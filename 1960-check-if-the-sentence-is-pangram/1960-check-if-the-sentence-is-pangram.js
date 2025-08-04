/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    
    a=new Set(sentence)
    return a.size==26
};