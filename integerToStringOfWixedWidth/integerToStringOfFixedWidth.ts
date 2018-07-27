function integerToStringOfFixedWidth(number: number, width: number): string {
    let stringifNum = number.toString();
    const numberWidth = stringifNum.length;


    if(numberWidth < width){
        const widthDiff = width - numberWidth;
        let padStart = '';

        for(let i=0; i<widthDiff; i++){
            padStart = padStart.concat('0');
        }
        return padStart.concat(stringifNum)
    }
if(numberWidth < width){
    const widthDiff = width - numberWidth;
    return stringifNum.substring(widthDiff, stringifNum.length)
}
    return stringifNum;
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
