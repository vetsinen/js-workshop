"use strict"
let words1 = ["americans","love","to","eat"]
let words2= ["a", "woman", "checking", "her", "account" ,"in", "New York City","on", "Monday"]

const dictionary = {
    "americans":"американцы",
    "account":"счет",
    "her":"её",
    "eat":"есть",
    "checking":"проверят",
    "in":"в",
    "on":"на",
    "love":"любить",
    "Monday":"понедельник",
    "woman":"женщина"
}

function translate(words, dictionary) {
    let rez = ""
    for (let word of words) {
        if (word in dictionary){
            rez += dictionary[word]+" "
        }
        else {
            rez+= word+" "
        }
    }
    return rez
}

console.log(words1.join(" "),"-", translate(words1, dictionary))
console.log(words2.join(" "),"-", translate(words2, dictionary))


