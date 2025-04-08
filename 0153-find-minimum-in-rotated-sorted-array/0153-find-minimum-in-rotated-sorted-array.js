/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    minimum=nums[0]
    for(i=0;i<nums.length;i++)
    {
        if(nums[i]<=minimum)
        {
            minimum=nums[i]
        }
    }
    return minimum
};
