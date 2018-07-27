function longestDigitsPrefix(inputString: string): string {
    let digits = ['0'-9]
    const chars = inputString.split('')
    let prefix = ''

    for(let char of inputString){
        if(!digits.includes(char)){
            break;
        }
        prefix += char;
    }
    return prefix
}

console.log(longestDigitsPrefix('123aa1'));