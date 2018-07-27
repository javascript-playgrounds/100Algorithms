function squareDigitsSequence(a0: number): number {
    let count = 1;
    const uniqueNums = [a0]
    while (true){
        count++;
        a0 = digitPower(a0);
        if(uniqueNums.includes(a0)){
            return count;
        }
        uniqueNums.push(a0)

    }
}

function digitPower(num: number): number{
    const digits = num.toString().split('').map((element) => parseInt(element) **2);
    const sum = digits.reduce((a,b) => a+b);
    return sum;
}


console.log(squareDigitsSequence(16));
console.log(squareDigitsSequence(103));