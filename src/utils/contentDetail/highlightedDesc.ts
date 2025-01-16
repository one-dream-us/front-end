export const highlightedDesc = (
  desc: string,
  keywords: string[] | string,
  spanId: 'highlight_underline' | 'highlight_text',
) => {
  if (!desc) {
    desc = '';
  }
  if (!keywords) {
    keywords = [''];
  }
  const keywordArray = Array.isArray(keywords) ? keywords : [keywords];

  return keywordArray.reduce((acc, keyword) => {
    const regex = new RegExp(`(${keyword})`, 'g');
    return acc.replace(regex, `<span id=${spanId}>$1</span>`);
  }, desc);
};
