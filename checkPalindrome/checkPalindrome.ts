function checkPalindrome(inputString: string): boolean {
    const origin = inputString.toLowerCase();
    const reverseWord = origin.split('').reverse().join('')
    return origin === reverseWord;
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
