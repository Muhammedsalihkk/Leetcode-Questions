/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    positive=0
    negative=0
    for(i=0;i<nums.length;i++){
        if(nums[i]>0)
        {
            positive++
        }
        else if(nums[i]<0)
        {
            negative++
        }
    }
    return positive>=negative?positive:negative
    
};