/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    if(n==1)return 1
    value=n
    for(i=1;i<=n;i++){
        value-=i
        if(value<0){
             return i-1
        }
           
        
    }
};