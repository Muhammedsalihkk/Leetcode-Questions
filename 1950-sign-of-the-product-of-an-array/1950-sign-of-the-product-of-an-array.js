/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    a=nums[0]
    for(i=1;i<nums.length;i++){
        a*=nums[i]
    }
    console.log(a)
    if(a>0){
        return 1
    }
    else if(a<0){
        return -1
    }
    else{
        return 0
    }
};