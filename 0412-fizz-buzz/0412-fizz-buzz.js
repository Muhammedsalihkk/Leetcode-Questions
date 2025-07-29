/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    o=[]
    for(i=1;i<=n;i++){
        if(i%3==0&&i%5==0){
            o.push("FizzBuzz")
        }
        else if(i%3==0){
            o.push("Fizz")
        }
        else if(i%5==0){
            o.push("Buzz")
        }
        else{
            o.push(`${i}`)
        }
    }
    return o
};