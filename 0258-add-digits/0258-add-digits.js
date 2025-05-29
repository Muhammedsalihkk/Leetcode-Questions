/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    num=num.toString().split("")
    sum=0
      for(i=0;i<num.length;i++)
    {
        sum+=Number(num[i])
         if(i==num.length-1)
        {
            if(sum<10)
            {
                break
            }
            else{
                num=sum.toString().split("")
                i=-1
                 sum=0
            }
        }
    }
    return sum
};