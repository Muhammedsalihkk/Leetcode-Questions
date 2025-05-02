/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let result=0
    for(i=0;i<sentences.length;i++)
    {
        split=sentences[i].split(" ")
        if(split.length>result)
        {
            result=split.length
        }
        split=null
    }
    return result
};