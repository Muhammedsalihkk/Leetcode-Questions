/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let mult=1
    let sum=0
    n=n.toString().split("")
    for(i=0;i<n.length;i++){
        mult*=n[i]
        sum+=Number(n[i])
    }
     return mult-sum
};