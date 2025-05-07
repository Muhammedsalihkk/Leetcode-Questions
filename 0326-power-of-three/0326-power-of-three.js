/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    for(i=0;i<n;i++)
    {
        if(3**i==n)
        {
            return true
        }
        else if(3**i>n){
            return false
        }
    }
    return false
};