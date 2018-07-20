function extractEachKth(inputArray:number[], k: number): number[] {
    let result =  inputArray.filter((ele, index) => (index+1) % k !==0);
    return result;
}

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));