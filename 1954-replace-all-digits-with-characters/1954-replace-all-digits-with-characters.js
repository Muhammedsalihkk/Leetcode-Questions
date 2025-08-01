/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    o=""
    for(i=0;i<s.length;i++){
        if(Number(s[i])||Number(s[i])==0){
            a=s[i-1].charCodeAt()
            console.log(Number(s[i]))
            o+=String.fromCharCode(a+Number(s[i]))
        }else{
            o+=s[i]
        }
    }
    return o
};