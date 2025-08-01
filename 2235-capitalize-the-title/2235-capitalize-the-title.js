/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    r=""
    for(i of title.split(" ")){
        i=i.toLowerCase()
        if(i.length>2){
            i=i.split("")
            i[0]=i[0].toUpperCase()
            r+=" "+i.join("")
        }else{
            r+=" "+i
        }
    }
    return r.trim()
};