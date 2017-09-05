// The Merge sort algorithm

// Definition

// Merge sort is a divide and conquer algorithm. 
// Conceptually, a Merge sort works as follows: 
// 1) Divide the unsorted list into n sublists, each containing 1 element 
// (a list of 1 element is considered sorted), 
// 2) Repeatedly merge sublists to produce new sorted sublists until there is only 1 sublist remaining. 
// This will be the sorted list. From Wikipedia

// array to sort
var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

// top-down implementation
function mergeSortTopDown(array) {
  if(array.length < 2) {
    return array;
  }

  var middle = Math.floor(array.length / 2);
  var left = array.slice(0, middle);
  var right = array.slice(middle);

  return mergeTopDown(mergeSortTopDown(left), mergeSortTopDown(right));
}
function mergeTopDown(left, right) {
  var array = [];

  while(left.length && right.length) {
    if(left[0] < right[0]) {
      array.push(left.shift());
    } else {
      array.push(right.shift());
    }
  }
  return array.concat(left.slice()).concat(right.slice());
}

console.log(mergeSortTopDown(array.slice())); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]