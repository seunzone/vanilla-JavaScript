// Count the number of times vowels occur in a string

const VowelCount = (str) => { 
  let vowels = str.match(/[aeiou]/ig);
  return vowels.length;
}

console.log(VowelCount("penisula"))

//Bonus Code ----- Word Count
const WordCount = (str) =>{ 
  return str.split(" ").length /* make an array of words and returning the length */
}

console.log(WordCount('stew is good'))//3
console.log(WordCount('JavaScript is Bae'))//3