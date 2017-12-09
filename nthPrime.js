// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th
// prime is 13.
// Write a program that prints out the nth number of prime…
// So if I pass in 6, then the program should print out 13

const nthPrime = (n) => {
  let count = 0;
  let num = 1;
  while(count++ != n){
    num = getNextPrimeNumber(num);
  }
  return num;
};

function getNextPrimeNumber(n){
  for(let i = ++n; i< n*n; i++){
    if(isPrime(i)) return i;
  }
  return 0;
}

function isPrime(n){
  for(let i = 2; i< n; i++)
    if (n%i===0) 
      return false;
  return true;
}
console.log(nthPrime(6));