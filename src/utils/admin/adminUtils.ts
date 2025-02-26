export const getMarkingWord = (sentence: string) => {
  const regex = /<mark>(.*?)<\/mark>/g;
  const matches = [];
  let match;

  while ((match = regex.exec(sentence)) !== null) {
    matches.push(match[1]);
  }

  const [word] = matches;

  return word;
};

export const removeMarkTag = (sentence: string) => {
  return sentence.replace('<mark>', '').replace('</mark>', '');
};

export const getDraggedWord = (sentence: string, startIndex: number, endIndex: number) => {
  let str = '';
  for (startIndex; startIndex <= endIndex; startIndex++) {
    str += sentence[startIndex];
  }
  return str;
};
