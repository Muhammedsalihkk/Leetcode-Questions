/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    peak=nums[0]
    for(i=0;i<nums.length;i++)
    {
        if(nums[i]>peak)
        {
            peak=nums[i]
        }
    }
    return nums.indexOf(peak)
};