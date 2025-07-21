/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n<=0){
        return false
    }
for(i=0;i<n;i++){
    if(Math.pow(4,i)>n){
        return false
    }
    else if(Math.pow(4,i)==n){
        return true
    }
}
return true
};