/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function(num1, num2) {
    if(num1==0||num2==0)return 0
    length=num1>num2?num1:num2
    count=0
    for(i=0;i<length;i++){
        if(num1>num2){
            num1=num1-num2
            count++
        }
        else if(num2>num1){
            num2=num2-num1
            count++
        }
        if(num1==num2){
            count++
            break
        }
    }
    return count


};