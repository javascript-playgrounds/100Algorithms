function digitDegree(n: number): number {
  let count = 0; 
    let currentNum = n;
  if(n<=9){
      return count;
  } else{
      while(true){
        count++;
        currentNum = getDigit(currentNum);
        if(currentNum <= 9) {
            break;
        }
      }
  }
  return count;
}

function getDigit(num: number): number{
    const nums = num.toString().split('').map((element) => parseInt(element));
    return nums.reduce((a: any,b: any) => {
        return a+b;
    });
}

console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(9133222910133333334444999999999));