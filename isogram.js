// Write a program that checks if a word supplied as the argument is an Isogram. An Isogram is a word in which no letter occurs more than once.
// Create a method called is_isogram that takes one argument, a word to test if it's an isogram. This method should return a tuple of the word and a boolean indicating whether it is an isogram.
// If the argument supplied is an empty string, return the argument and False: (argument, False). If the argument supplied is not a string, raise a TypeError with the message 'Argument should be a string'.

const isIsogram = (str) => {
 if (str === ''){ return false; } else
 if (typeof str !== 'string'){ return 'Argument should be a string';}
 
 let word = str.split(''); 
 for (let i = 0, j = 1; i < word.length - 1; i++, j++) {
   if (word[i] == word[j]){
     console.log('This is not an Isogram');
     return false;
   }
 }
 console.log('This is a Isogram');
 return true;
}

isIsogram("isaac");
isIsogram("isac");
isIsogram(34);