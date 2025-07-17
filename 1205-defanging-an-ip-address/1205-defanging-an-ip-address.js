/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    address=address.split("")
    a=""
    for(i of address){
        if(i=="."){
            a+=`[${i}]`
        }
        else{
            a+=i
        }
    }
    return a
};