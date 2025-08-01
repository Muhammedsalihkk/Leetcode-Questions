/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    s=s.split(" ")
    s=s.splice(0,k)
return s.join(" ")
};