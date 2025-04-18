/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
 result=false
if(s.length!=t.length)
{
    return false
}
else if(s.split("").sort().join("")==t.split("").sort().join(""))
{
    return true
}
else{
    return false
}
};