// The filter function creates a new array with all elements from an original array that pass a certain functions test. 
// For example, you can use the filter function to create a new array of only positive values, like below. 
// The function being called takes in an argument which is the value of the current element in the array.


const nums = [-4, 3, 2, -21, 1];

const pos = nums.filter((el) => {
  return el > 0
});

console.log(pos) // => [3, 2, 1]

// You can also, for example, filter out all objects in a data file that have incorrect or undefined values. 
// In the example below, we filter out all elements that have an incorrect age value.

const data = [
  {name: 'daniel', age: 45},
  {name: 'john', age: 34},
  {name: 'robert', age: null},
  {name: 'jen', age: undefined},
  {name: null, age: undefined}
];

// dataMod will now contain only the first two objects in the data array
const dataMod = data.filter(function(el) {
  if (el.name != undefined && el.age != undefined) {  
    return true
  }
  else { 
    return false
  }
});

console.log(dataMod)

