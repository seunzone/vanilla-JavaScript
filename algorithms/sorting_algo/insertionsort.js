// The Insertion sort algorithm

// Definition

// Insertion sort algorithm iterates, consuming one input element each repetition, 
// and growing a sorted output list. Each iteration removes one element from the input data, 
// finds the location it belongs within the sorted list, and inserts it there. 
// It repeats until no input elements remain. From Wikipedia

// This algorithm is often compared to how as human we would sort a card game for example.

// array to sort
var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function insertionSort(array) {
  for(var i = 0; i < array.length; i++) {
    var temp = array[i];
    var j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
}

console.log(insertionSort(array)); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]