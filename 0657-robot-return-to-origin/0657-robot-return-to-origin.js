/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    U=0
    D=0
    R=0
    L=0
    r=false
    for(i of moves){
        switch (i){
            case "U":
                U++
                break;
            case "D":
                D++
                break;
            case "R":
                R++
                break;
            default:
                L++
        }
    }
    if(R==L){
        r=true
    }else{
        return false
    }
    if(D&&U!==0&&D==U){
         r= true
    }
    else{
        r=false
    }
    return r
};