/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let nums1=[]
    let nums2=[]
    for(i=1;i<=n;i++)
    {
       if(i%m!=0)
       {
        nums1.push(i)
       }
       else{
        nums2.push(i)
       }
    }
    sum1=nums1.reduce((acc,number)=>acc+number,0)
    sum2=nums2.reduce((acc,number)=>acc+number,0)
    nums1=null
    nums2=null
    return sum1-sum2
};