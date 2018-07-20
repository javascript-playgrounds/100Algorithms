function extractMatrixColumn(matrix: number[][], column: number): number[] {
    const matrixCol: number[] = [];
    matrix.forEach((row) => matrixCol.push(row[column]));
    return matrixCol;
}

console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2));