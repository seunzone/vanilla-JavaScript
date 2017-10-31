//Function checking if the string passed is a Palindrome

const Palindrome = (str) => { 
	let noSpaces = str.replace(/ /g,"").toLowerCase();
	let backwards = noSpaces.split("").reverse().join("");
	return noSpaces == backwards;
}
console.log(Palindrome('raccar')) //true
console.log(Palindrome('damn')) //false
console.log(Palindrome(' Raccar ')) //true
console.log(Palindrome('Boar')) //false