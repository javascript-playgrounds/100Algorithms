function stringsConstruction(a: string, b: string): number {
    const aCount;
    const bCount; 
    const counts = [];

    for(let char in aCount){
        if(bCOunt.hasOwnProperty(char)){
            counts.push(Math.floor(bCount[char]/aCount[char]));
        } else {
            return 0;
        }
    }
    return Math.min(...counts);


}

function getAlphabet(word: string){
    const chars = word.split('');
    const alphaCount = {};

    chars.forEach((char) => {
        if(alphaCount.hasOwnProperty(char)){
            alphaCount[char]++; 
        } else {
            alphaCount[char] = 1;
        }
    });
    return alphaCount;
}

console.log(stringsConstruction('abc', 'abccba'));