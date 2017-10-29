// Wirte a function that'll find all the duplicates in an array
const duplicates =(arr)=> {
  
  // our hash table to store each element
  // in the array as we pass through it
  let hashTable = [];
  
  // store duplicates
  let dups = [];
  
  // check each element in the array
  for (let i = 0; i < arr.length; i++) {
    
    // if element does not exist in hash table
    // then insert it
    if (hashTable[arr[i].toString()] === undefined) {
      hashTable[arr[i].toString()] = true;
    } 
    
    // if element does exist in hash table
    // then we know it is a duplicate
    else { dups.push(arr[i]); }
    
  }
  
  return dups;
  
}

duplicates([1, 22, -4, 103, 21, 22, 4,45, 23, 103]);