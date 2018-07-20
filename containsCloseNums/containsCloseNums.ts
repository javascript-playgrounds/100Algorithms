function containsCloseNums(nums: number[], k: number): boolean {
    for(let i=0; i<nums.length; i++){
        console.log(nums[i])
        for(let j=0; j<nums.length; j++){
            //console.log(nums[j])
            if(i !== j){
                if(nums[i]===nums[j]){
                    if(Math.abs(i-j)<=k){
                        return true;
                    }
                }
            }
        }
    }
    return false;
}

console.log(containsCloseNums([3, 0, 1, 2, 3, 5, 2, 3], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));