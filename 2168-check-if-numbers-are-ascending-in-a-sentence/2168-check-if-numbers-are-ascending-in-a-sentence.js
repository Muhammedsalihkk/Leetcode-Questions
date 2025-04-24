/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    s=s.split(" ")
    s=s.filter((number)=>Number(number)==number)
    for(i=1;i<s.length;i++)
    {
        if(Number(s[i])<=Number(s[i-1]))
        {
            return false
        }
    }
    return true
};