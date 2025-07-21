/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    a=n
    sum=0
    for(i=n;i>=1;i--){
         sum+=Math.floor(a/2)
        a-=Math.floor(a/2)
       
    }
    return sum
};