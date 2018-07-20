function crossingSum(matrix: number[][], a: number, b: number): number {
  const colTotal = matrix[a].reduce((a,b) => a+b);
  console.log(colTotal)
  let rowTotal = 0;
 
  for(let i=0; i<matrix.length; i++){
      rowTotal += i !== a ? matrix[i][b] : 0;
  }

  return colTotal + rowTotal;
}

console.log(crossingSum([[1, 1, 1, 1], 
    [2, 2, 2, 2], 
    [3, 3, 3, 3]], 1, 3));