const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

const getIndexFromCharacter = (character:string) => {
  for (let i = 0; i < alphabet.length; i++)
    if (character === alphabet[i])
      return i;

  return 0;
};

export {
  alphabet, getIndexFromCharacter
};
