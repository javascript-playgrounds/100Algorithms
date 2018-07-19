function chunkyMonkey(arr: any[], size: number): any[][] {
    const nested = [];
    let count = 0;

    while(count < arr.length){
       //d console.log(arr.slice(count, count += size), count, size)
        nested.push(arr.slice(count, count += size))
       
    }
    return nested;
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));