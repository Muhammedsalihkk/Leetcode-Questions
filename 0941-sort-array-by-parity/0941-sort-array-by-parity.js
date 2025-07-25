/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    r=[]
    for(i of nums){
        if(i%2==0){
            r.unshift(i)
        }else{
            r.push(i)
        }
    }
    return r
};