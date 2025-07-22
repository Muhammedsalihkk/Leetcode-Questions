/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    n=n.toString()
    a=0
    for(i=0;i<n.length;i++){
        if(i%2==0){
            a+=Number(n[i])
        }
        else{
            a-=Number(n[i])
        }
    }
    return a
};