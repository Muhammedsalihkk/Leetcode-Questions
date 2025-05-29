/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  
    k=0
    for(i=1;i<nums.length;i++)
    {
        if(nums[i]!=nums[k])
        {
            k++
            nums[k]=nums[i]
            
        }
    }
    return k+1
};