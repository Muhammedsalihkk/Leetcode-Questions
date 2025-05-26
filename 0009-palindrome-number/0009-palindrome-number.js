/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x=String(x)
    r=x.split("").reverse().join("")
    return x==r
};