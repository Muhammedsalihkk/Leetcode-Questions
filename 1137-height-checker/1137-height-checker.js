/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    count=0
    expected=[...heights].sort((a,b)=>a-b)
    for(i=0;i<expected.length;i++){
        if(expected[i]!=heights[i]){
            count++
        }
    }
    return count
};