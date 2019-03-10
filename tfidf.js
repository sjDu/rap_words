const dictionary = require('./dict')

function idf(word) {
    const docNum = dictionary.length
    const docNumHasWord = dictionary.filter(doc => doc.indexOf(word) > -1).length

    return Math.log(docNum/(docNumHasWord + 1))
}

function tf(word, article) {
    // assume articel in dictionary has been trimmed
    const numTotalWords = article.split(" ").length
    const wordCount = occurrences(article, word, false)

    return wordCount / numTotalWords
}

function tfidf(word, article) {
    return tf(word, article) * idf(word)
}

// article is a string with words split by a space
function analysis(article) {

    const words = article.split(" ").filter((w, i, self) => self.indexOf(w) == i)
    return  words.map(w => {
        return {
            word: w,
            val: tfidf(w, article)
        }        
    }).sort((a,b) => a.val > b.val ? -1 : 1)


    
}

function occurrences(string, subString, allowOverlapping) {

    string += "";
    subString += "";
    if (subString.length <= 0) return (string.length + 1);

    var n = 0,
        pos = 0,
        step = allowOverlapping ? 1 : subString.length;

    while (true) {
        pos = string.indexOf(subString, pos);
        if (pos >= 0) {
            ++n;
            pos += step;
        } else break;
    }
    return n;
}


module.exports = {
    tfidf,
    analysis,
}