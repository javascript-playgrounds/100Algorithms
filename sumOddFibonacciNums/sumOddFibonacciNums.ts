function sumOddFibonacciNums(num: number): number {
    let result = 0; 

    let previous = 0; 

    let current = 1;

    while (current <= num){
        if(current % 2 !===0){
            result += current;
        }
        const nextCurrent = current + previous;
        previous = current;
        current = nextCurrent;
    }
    return result;
}

console.log(sumOddFibonacciNums(1000));
console.log(sumOddFibonacciNums(4000000));
console.log(sumOddFibonacciNums(10));