/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    count=0
    for(i=0;i<nums.length;i++)
    {
        for(j=i+1;j<nums.length;j++)
        {
            if(nums[j]>nums[i]?nums[j]-nums[i]==k:nums[i]-nums[j]==k)
            {
                console.log("j",nums[j])
                count++
            }
        }
    }
    return count
};