/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s=s.split(" ")
    a=""
    for(i of s){
        a+=i.split("").reverse().join("")+" "
    }
    return a.trim()
};