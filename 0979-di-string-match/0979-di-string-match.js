/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    D=s.length
    I=0
    result=[]
    for(i=0;i<s.length;i++){
        if(s[i]=="I"){
            result.push(I)
            I++
        }
        else{
            result.push(D)
            D--
        }
    }
    result.push(I)
    return result
};