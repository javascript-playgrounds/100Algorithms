function addTwoDigits(n: any): number {
    var nums = n.toString().split('');
    return nums.reduce((a: string, b: string)=> {
      return parseInt(a) + parseInt(b)
    })
}

console.log(addTwoDigits(29));