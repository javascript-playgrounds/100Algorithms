function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
// inputArray.forEach((element, index) => {
//     if(element === elemToReplace) {
//         inputArray[index] = substitutionElem; 
//     }
// });
// return inputArray;
// }
let result = inputArray.slice();
    for(let i=0; i<=inputArray.length; i++){
        if(inputArray[i] == elemToReplace){
            result[i] = substitutionElem;
            console.log(inputArray[i])
            
        }
        
    }
    return result;
}

console.log(arrayReplace([1, 2, 1], 1, 3));