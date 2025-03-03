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
  return sentence.replaceAll('<mark>', '').replaceAll('</mark>', '');
};
