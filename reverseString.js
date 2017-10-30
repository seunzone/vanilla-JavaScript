// For this challenge you I'll be reversing a string.

// A simple way to reverse a string would be to create a new string and 
// fill it with the characters from the original string, but backwards. 
// To do this, we need to loop through the original string starting from the end, 
// and every iteration of the loop we move to the previous character in the string

const FirstReverse = (str) => { 
let newString = "";
// add each character to newString
  for (var i = str.length - 1; i >= 0; i--) {   
    newString = newString + str.charAt(i);
  }
  return newString;         
}
console.log(FirstReverse('Welcome'));
console.log(FirstReverse('raccar'));
//=============================================//
//============================================//

//Using the JavaScript in-built method
const FirstReverse = (str) => { 
  // first we split the string which creates an array of characters, e.g. ['c','a','t']
  // then we call the reverse function on this array 
  // and finally we turn the reversed array back into a string using the join function
  return str.split('').reverse().join('');       
}
console.log(FirstReverse('Welcome'));
console.log(FirstReverse('raccar'));
