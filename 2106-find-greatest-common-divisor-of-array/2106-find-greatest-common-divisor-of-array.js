/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    g=0
    s=Infinity
    for(i of nums){
        if(g<i){
            g=i
        }
        if(s>i)
        {
            s=i
        }
    }
    d=0
    for(i=1;i<=s;i++){
        if(s%i==0&&g%i==0&&d<i){
            d=i
        }
    }
    return d
};