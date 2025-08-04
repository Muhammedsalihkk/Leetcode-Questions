/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    result=[]
    for(i=0;i<nums.length;i++){
        sum=0
        for(j=0;j<=i;j++){
            sum+=nums[j]
        }
        result.push(sum)
    }
    return result
};