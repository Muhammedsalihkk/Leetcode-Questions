/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    result=[]
    for(i of nums){
        result.push(Math.pow(i,2))
    }
    return result.sort((a,b)=>a-b)
};