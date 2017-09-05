// The Shellsort algorithm

// Definition

// Shellsort is an in-place comparison sort which can be seen as either a generalization of sorting by exchange 
// (bubble sort) or sorting by insertion (insertion sort). 
// The method starts by sorting pairs of elements far apart from each other, then progressively reducing
//  the gap between elements to be compared. Starting with far apart elements can move some out-of-place
//   elements into position faster than a simple nearest neighbor exchange. From Wikipedia

// Shellsort is a generalization of insertion sort that allows the exchange of items that are far apart. 
// It is worth noting that for a value of gap equals to 1, this algorithm is equal to insertion sort. 
// Have a look at the code below and you will quickly notice the similarities.

// array to sort
var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

// gaps
var gaps = [701, 301, 132, 57, 23, 10, 4, 1];

function shellsort(array) {
  for(var g = 0; g < gaps.length; g++) {
    var gap = gaps[g];
    for(var i = gap; i < array.length; i++) {
      var temp = array[i];
      for(var j = i; j >= gap && array[j - gap] > temp; j -= gap) {
        array[j] = array[j - gap];
      }
      array[j] = temp;
    }
  }
  return array;
}

console.log(shellsort(array)); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]