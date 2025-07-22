/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    count=0
    for(i of nums){
        if(i.toString().length%2==0){
            count++
        }
    }
    return count
};