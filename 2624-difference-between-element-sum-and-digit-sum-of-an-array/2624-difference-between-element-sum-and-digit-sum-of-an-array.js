/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    main=nums.reduce((acc,number)=>acc+number,0)
    second=nums.join("").split("").reduce((acc,number)=>acc+Number(number),0)
    return main-second
};