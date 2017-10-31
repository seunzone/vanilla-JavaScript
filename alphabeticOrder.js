//Return a Given String in alphabetic Order

const AlphabetOrder = (str) => { 
  var letters = str.split(""); /* turn string into array of characters */
  return letters.sort().join(""); /* sort() puts in alphabetical order then when join to a single string */
}

console.log(AlphabetOrder('bbcccaaaddfffggggkjdljdskhbdj'))