//A simple function that changes the date format from '/' to '-'

const date1 = ["01/12", "02/09", "03/10"]

const date2= date1.map((elem) =>{
    return elem.replace("/", "-")
}) 

console.log(date2)

//==============================================//
//==============================================//
//=============================================//

// Another simple example using the map function to round an array of numbers up in JavaScript:

let arr = [1.5, 2.56, 5.1, 12.33];

// round each number up in an array
let rounded = arr.map(Math.ceil);

console.log(rounded); // => [2, 3, 6, 13]