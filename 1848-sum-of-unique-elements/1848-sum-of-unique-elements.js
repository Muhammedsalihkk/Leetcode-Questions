/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
   sum= nums.reduce((acc,num)=>{
        if(nums.indexOf(num)==nums.lastIndexOf(num))
        {
            return acc+num
        }
        else{
            return acc
        }
    },0)
    return sum
};