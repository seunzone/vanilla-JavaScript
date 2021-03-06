// Each new term in the Fibonacci sequence is generated by adding the previous two
// terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four
// million, find the sum of the even-valued terms.

const fibonacci = (number) => {
    let val = number;
    let f1 = 1;
    let f2 = 1;
    let total = 0;
    while (f2 < val) {
        let num = f1 + f2;
        if (num % 2 === 0)
            total += num;
        f1 = f2;
        f2 = num;        
    }
    return total;
}
console.log(fibonacci(4000000)); 