function allLongestStrings(inputArray: string[]): string[] {
    let longestLength =0;
    let result = [];
    inputArray.forEach((word: string) => {
        if(word.length >= longestLength){
            longestLength = word.length;
        }   
    })
    inputArray.forEach((word: string) => {
        if(word.length == longestLength){
            result.push(word)
        }
    })

    return result
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));