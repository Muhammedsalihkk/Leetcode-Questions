/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    count=0
    money=0
    step=1
    for(i=1;i<=n;i++){
        count++
        money+=count
        if(i%7==0){
            step++
            count=step-1
        }
    }
    return money
};