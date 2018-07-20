function commonCharacterCount(s1: string, s2: string): number {
   const s1Char: string[] = s1.split('');
   const s2Char: string[] = s2.split('');
   const s1CharCount = getCharList(s1Char);
   const s2CharCount = getCharList(s2Char);
   console.log(s2CharCount)
   let total = 0;

   for (const prop in s1CharCount){
       if(s2CharCount.hasOwnProperty(prop)){
           if(s2CharCount[prop] <s1CharCount[prop]){
               total += s2CharCount[prop]
           }else{
               total += s1CharCount[prop]
           }
       }
   }
   return total
}

function getCharList(chars: string[]): object {
    const wordCount = {};

    for(let i=0; i<chars.length; i++){
        if(wordCount.hasOwnProperty(chars[i])){
            wordCount[chars[i]]++;
        }else{
            wordCount[chars[i]]=1;
        }
    }
    console.log(wordCount)
    return wordCount;
}


console.log(commonCharacterCount('aabcc', 'adcaa'));