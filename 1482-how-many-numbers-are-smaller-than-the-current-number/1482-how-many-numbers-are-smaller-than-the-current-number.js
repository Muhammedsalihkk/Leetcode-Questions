/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    result=[]
    for(i=0;i<nums.length;i++){
        count=0
        for(j=0;j<nums.length;j++){
            if(nums[i]>nums[j]){
                count++
            }
        }
        result.push(count)
    }
    return result
};