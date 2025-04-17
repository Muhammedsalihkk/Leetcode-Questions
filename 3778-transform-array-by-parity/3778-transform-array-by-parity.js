/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
   filter= nums.map((a)=>{
        if(a%2==0)
        {
            return 0
        }
        else{
            return 1
        }
    })
    sort=filter.sort((a,b)=>a-b)
    return sort
};