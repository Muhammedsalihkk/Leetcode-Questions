/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {

        a=s.split("")

        Lcount=0
        Acount=0
        for(i of a){
            if(i=="A"){
                Acount++
                Lcount=0
            }
            else if(i=="L"){
                Lcount++
                if(Lcount==3) return false
            }
            else{
                Lcount=0
            }
        }
        return Lcount<3&&Acount<2
};