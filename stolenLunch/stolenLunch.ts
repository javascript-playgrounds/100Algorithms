function stolenLunch(note: string): string {
    const chars: string[] = note.split('');
    let translatedMessage = '';
    const codeDictionary = {
        '0': 'a', '1':'b'...
    };

    for(let char of chars){
        translatedMessage += codeDictionary.hasOwnProperty(char) ? codeDictionary[char] : char;
    }
    return translatedMessage;
}

console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja"));