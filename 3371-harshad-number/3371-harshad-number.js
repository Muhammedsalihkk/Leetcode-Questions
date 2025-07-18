/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    c=x.toString().split("")
    if(c.length==2){
       a= Number(c[0])+Number(c[1])
       console.log()
       if(Number(x)%a==0){
        return a
       }
       else{
        return -1
       }
    }
    else if(c.length>2){
        return 1
    }
    else{
        return x
    }

};