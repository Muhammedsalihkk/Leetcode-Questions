/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    b=letters
   letters.push(target)
    a=new Set([...letters])
    a=[...a]
    a.sort()
   
    if(a[a.indexOf(target)+1]){
        return a[a.indexOf(target)+1]
    }else{
       return  b[0]
    }
};