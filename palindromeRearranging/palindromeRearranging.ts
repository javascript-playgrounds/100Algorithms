function palindromeRearranging(inputString: string): boolean {
    const chars = inputString.split('');
    const letterObject = {};
    let oddCount = 0;

    for (let i=0; i<chars.length; i++){
        if(letterObject.hasOwnProperty(chars[i])){
            letterObject[chars[i]]++;
        }else{
            letterObject[chars[i]]=1;
        }
    }
    for(let val in letterObject){
        if(letterObject[key] %2 !==0){
            oddCount++
        }
    }
    return oddCount > 1 ? false : true;
}

console.log(palindromeRearranging('aabb'));