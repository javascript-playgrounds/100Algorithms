function addBorder(picture: string[]): string[] {
    const lengthOfWall = picture[0].length + 2;
    let wall ='';
    for(let i=0; i<lengthOfWall; i++){
       wall = wall.concat('*');
    }
    picture.unshift(wall);
    picture.push(wall);
for (let j=1; j<picture.length-1; j++){
    picture[j] = '*'.concat(picture[j], '*');
}
    return picture;
}

console.log(addBorder(["abc", "ded"]));