function properNounCorrection(noun: string): string {
   const firstChar = noun[0].toUpperCase();
   const restOfword = noun.slice(1,noun.length).toLowerCase();

   return firstChar.concat(restOfword);
}

console.log(properNounCorrection('pARiS'));
console.log(properNounCorrection('John is Cool'));