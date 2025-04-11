/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
a=0
let i=0;
while(a<n)
{
    a=0
    a=2**i
    i++
}
 if(a>n||n==0)
 {
    return false
 }
 else{
    return true
 }

};