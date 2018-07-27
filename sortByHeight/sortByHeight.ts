function sortByHeight(a: number[]): number[] {
    const array2 = a.filter((element) => {
        if(element !== -1){
            return element;
        }
    }).sort((num1,num2) => num1-num2);
    let indexVal = 0;

    for(let i=0; i<a.length; i++){
        if(a[i] !== -1){
            a[i] = array2[indexVal];
            indexVal++;
        }
    }
    return a;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));