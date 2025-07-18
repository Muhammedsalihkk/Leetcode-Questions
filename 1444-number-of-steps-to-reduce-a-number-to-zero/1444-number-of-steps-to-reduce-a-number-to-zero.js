/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    count=0
    s=2
    for(i=0;num>=1;i++){
        if(num%2==0)
        {
            num/=2
            count++

        }
        else{
            num-=1
            count++
        }
        console.log(num)
    }
    return count
};