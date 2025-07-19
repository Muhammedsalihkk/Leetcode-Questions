/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    alice=0
    bob=0
    for(i of nums){
        if(i<10){
            alice+=i
        }
        else{
            bob+=i
        }
    }
    return bob>alice||alice>bob
};