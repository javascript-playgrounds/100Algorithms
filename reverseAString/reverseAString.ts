function reverseAString(str: string): string {
    let reversedWord = '';
    for(let i=str.length -1; i>0; i--){
        reversedWord += str[i];
    }
    return reversedWord;
    
    //return str.split('').reverse().join('');
}

console.log(reverseAString('hello'));
console.log(reverseAString('Howdy'));