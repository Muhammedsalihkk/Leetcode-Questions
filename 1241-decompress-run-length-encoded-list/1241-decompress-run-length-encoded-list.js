/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    a=[]
    for(i=0;i<nums.length;i++){
        if(i%2==0){
            for(k=0;k<nums[i];k++){
                console.log(nums[i])
                a.push(nums[i+1])
            }
        }
    }
    return a
};