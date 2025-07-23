/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    a=nums.filter((a)=>nums.indexOf(a)!=nums.lastIndexOf(a))
    r=new Set(a)
    return [...r]
};