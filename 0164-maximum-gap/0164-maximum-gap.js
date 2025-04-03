/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    if(nums.length==1)
    {
        return 0
    }
    let sum=0
    nums=nums.sort((a,b)=>a-b)
    for(i=0;i<nums.length;i++)
    {
        if(nums[i+1]-nums[i]>sum)
        {
            sum=nums[i+1]-nums[i]
        }
    }
    return sum
};