/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    b=""
    count=1
    for(i=0;i<s.length;i+=k){
        if(count%2!=0){
            a=s.substring(i,i+k)
            b+=a.split("").reverse("").join("")
            count++
        }else{
            b+=s.substring(i,i+k)
            count++
        }
    }
return b
};