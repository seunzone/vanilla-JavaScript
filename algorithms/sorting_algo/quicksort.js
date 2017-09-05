// The Quicksort algorithm

// Definition

// Quicksort is a divide and conquer algorithm. 
// Quicksort first divides a large array into two smaller sub-arrays: the low elements and the high elements. 
// Quicksort can then recursively sort the sub-arrays. From Wikipedia

//example
// array to sort
var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

// basic implementation (pivot is the first element of the array)
function quicksortBasic(array) {
  if(array.length < 2) {
    return array;
  }

  var pivot = array[0];
  var lesser = [];
  var greater = [];

  for(var i = 1; i < array.length; i++) {
    if(array[i] < pivot) {
      lesser.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  return quicksortBasic(lesser).concat(pivot, quicksortBasic(greater));
}

console.log(quicksortBasic(array.slice())); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

