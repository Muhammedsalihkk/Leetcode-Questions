/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums=nums.sort((a,b)=>a-b)
    if(nums[0]==1)
    {
        return 0
    }
    for(i=0;i<nums.length;i++)
    {
        if(!nums.includes(nums[i]+1))
        {
            return nums[i]+1
        }
    }
};