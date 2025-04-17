/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    s=x<z?z-x:x-z
    m=y<z?z-y:y-z
    if(s<m)
    {
        return 1
    }
    else if(s>m){
        return 2
    }
    else{
        return 0
    }
};