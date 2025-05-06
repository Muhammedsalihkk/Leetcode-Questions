/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    b=s.split("")
    u=b.find((a)=>b.indexOf(a)==b.lastIndexOf(a))
    console.log(u)
   return s.indexOf(u)
};