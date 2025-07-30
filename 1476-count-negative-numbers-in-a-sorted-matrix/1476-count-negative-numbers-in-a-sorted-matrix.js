/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    count=0
    grid=grid.flat()
    for(i of grid){
        if(i<0){
            count++
        }
    }
    return count
};