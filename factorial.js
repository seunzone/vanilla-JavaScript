// Challenge
// Using the JavaScript language, have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it (e.g. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18 and the input will always be an integer. 
// Sample Test Cases
// Input:4
// Output:24

// Input:8
// Output:40320

//========================================================//

//========================================================//

//========================================================//

//1st method.
function factorial(num) { 

  var facto = 1;

  for (var i = 1; i <= num; i++) {  
    // multiply each number between 1 and num  
    // factorial = 1 * 1 = 1
    // factorial = 1 * 2 = 2
    // factorial = 2 * 3 = 6
    // factorial = 6 * 4 = 24
    // ...
    facto = facto * i;
  }

  return factorial;
         
}

factorial(4); 
factorial(10);
factorial(9);
factorial(5);
//========================================================//

//========================================================//

//========================================================//

// 2nd Method
function factorial(num) { 

  // our factorial function
  function facto(n) { 
 
    // terminate the recursion once we hit zero
    if (n===0) { 
    	return 1; 
    }

    // otherwise keep calling the function recursively 
    else { 
    	return facto(n-1) * n; 
    }

  }

  return facto(num);
         
}
   
factorial(4);  

