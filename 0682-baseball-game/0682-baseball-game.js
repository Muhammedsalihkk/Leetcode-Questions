/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    record=[]
    a=0
    for(i of operations){
        if(Number(i)){
            record.push(Number(i))
        }
        if(i=="C"){
            record.pop()    
        }
        if(i=="D"){
            record.push(record[record.length-1]*2)
            console.log(record[record.length-1]*2)
        }
        if(i=="+"){
            record.push(record[record.length-1]+record[record.length-2])  
        }
    }
    a=record.reduce((a,b)=>a+b,0)
    return a
};