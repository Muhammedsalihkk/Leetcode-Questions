/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    count=0
    for(i of details){
       if( Number(i.substr(11,2))>60){
        count++
       }
    }
    return count
};