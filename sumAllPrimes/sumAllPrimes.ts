function sumAllPrimes(num: number): number {
    const primes = 0;

    for(let i=2; i<num; i++){
        for(let j=2; j<=i; j++){
            if(i===j){
                primes += i;
            }
            if(i%j ===0){
                break;
            }
        }
    }

    return primes;
}

console.log(sumAllPrimes(10));
console.log(sumAllPrimes(977));