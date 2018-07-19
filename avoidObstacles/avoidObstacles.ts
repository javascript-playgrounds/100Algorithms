function avoidObstacles(inputArray: number[]): number {
    inputArray = inputArray.sort((a,b)=> {
        return a-b;
    });
    const largestArrayValue = inputArray[inputArray.length -1];

    for(let i=1; i <= largestArrayValue + 1; i++){
        if(inputArray.every((element) => element % i !== 0)){
            return i;
        }
    }
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));