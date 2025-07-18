/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    s=num.toString()
    count=0
    for(i=0;i<s.length;i++){
        if(num%s[i]==0){
            count++
        }
    }
    return count
};