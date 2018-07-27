function reflectString(inputString: string): string {
  const chars: string[] = inputString.split('');
  const reflectionLetters = {
      a:'z', b:'y',c:'x', d:'w'...
  }

  let reflect = '';

  chars.forEach((char) => {
      reflect += reflectionLetters[char];
  });
  return reflect;
}

console.log(reflectString("name"));
