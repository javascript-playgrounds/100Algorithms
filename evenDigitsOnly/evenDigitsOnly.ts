function evenDigitsOnly(n: number): boolean {
    const digits = n.toString().split('');

    return digits.every((digit) => parseInt(digit) % 2 === 0);
}

function evenDigitsOnly2(n: number): boolean {
    const digit = n.toString().split('');
    let count;
    digit.forEach((element) => {
        if(element % 2 !==0) {
            return false
        };
    }
    return true
}f
console.log(evenDigitsOnly2(248622));
console.log(evenDigitsOnly2(642386));