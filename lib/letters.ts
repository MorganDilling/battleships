const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
// likely a better way of doing that but oh well...

const getIndexFromChar = (char:string) => {
  for (let i = 0; i < alphabet.length; i++)
    if (char === alphabet[i])
      return i;

  return 0;
};

export {
  alphabet, getIndexFromChar
};
