// The Selection sort algorithm

// Definition

// The Selection sort algorithm divides the input list into two parts: 
// the sublist of items already sorted and the sublist of items remaining to be sorted that occupy the rest of the list. 
// Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. 
// The algorithm proceeds by finding the smallest element in the unsorted sublist,
//  exchanging it with the leftmost unsorted element, and moving the sublist boundaries one element to the right. 
//  From Wikipedia

// array to sort
var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

// swap function helper
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function selectionSort(array) {
  for(var i = 0; i < array.length; i++) {
    var min = i;
    for(var j = i + 1; j < array.length; j++) {
      if(array[j] < array[min]) {
        min = j;
      }
    }
    if(i !== min) {
      swap(array, i, min);
    }
  }
  return array;
}

console.log(selectionSort(array)); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]