/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    a=nums.splice(n)
    b=[]
    for(i=0;i<nums.length;i++){
        b.push(nums[i])
        b.push(a[i])
    }
    return b
};