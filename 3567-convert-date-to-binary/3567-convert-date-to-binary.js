/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    a=date.split("-")
    f=Number(a[0]).toString(2)
    s=Number(a[1]).toString(2)
    t=Number(a[2]).toString(2)
    binary=`${f}-${s}-${t}`
    return binary
};