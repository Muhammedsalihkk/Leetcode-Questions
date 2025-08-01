/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    count=0
    for(i of words){
        if(i.split("").some((a)=>!allowed.includes(a))){
            
        }else{
            count++
        }
    }
    return count
};