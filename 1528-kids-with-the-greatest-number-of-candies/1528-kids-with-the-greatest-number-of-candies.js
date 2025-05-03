/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    result=[]
    greater=candies[0]
    for(i of candies)
    {
        if(i>greater)
        {
            greater=i
        }
    }

    for(i of candies)
    {
        result.push(i+extraCandies>=greater)
    }
    return result


};