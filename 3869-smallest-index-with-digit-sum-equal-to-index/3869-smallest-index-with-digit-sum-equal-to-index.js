/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
  for(i=0;i<nums.length;i++){
    if(nums[i]<10&&i==nums[i]){
        return i
    }
    else if(nums[i]>=10){
        a=nums[i].toString().split("").reduce((acc,a)=>acc+Number(a),0)
        console.log(a)
        if(a==i){
            return i
        }
    }
  }
  return -1
};