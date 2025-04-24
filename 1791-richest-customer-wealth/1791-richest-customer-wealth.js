/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    richest=0
    for(i=0;i<accounts.length;i++)
    {
       sum=accounts[i].reduce((acc,num)=>acc+num)
       if(richest<sum)
       {
        richest=sum
       }
    }
    return richest
};