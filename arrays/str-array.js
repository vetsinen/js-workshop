let lang = 'pascal'
lang[0]='t'
console.log(lang)

//https://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript
// In JavaScript, strings are immutable, which means the best you can do is to create a new string with the changed content and assign the variable to point to it.
//
//     You'll need to define the replaceAt() function yourself:
//
// String.prototype.replaceAt = function(index, replacement) {
//     return this.substr(0, index) + replacement + this.substr(index + replacement.length);
// }