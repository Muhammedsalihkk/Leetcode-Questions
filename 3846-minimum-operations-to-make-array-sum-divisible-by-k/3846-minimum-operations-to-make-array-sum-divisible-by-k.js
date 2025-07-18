/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    sum=0
    for(i of nums){
        sum+=i
    }
    return sum%k
};