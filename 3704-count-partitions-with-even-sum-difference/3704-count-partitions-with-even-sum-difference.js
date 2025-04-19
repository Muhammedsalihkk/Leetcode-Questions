/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
let even=0
    for(i=1;i<nums.length;i++)
    {
            slice=nums.slice(0,i)
            slice2=nums.slice(i)
            sum1=slice.reduce((acc,number)=>acc+number,0)
            sum2=slice2.reduce((acc,number)=>acc+number,0)
            s=sum1-sum2
            if(s%2==0)
            {
                even++
            }
    }
    return even
};