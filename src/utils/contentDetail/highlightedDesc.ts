export const highlightedDesc = (
  desc: string,
  keywords: string[] | string,
  spanId: 'highlight_underline' | 'highlight_text',
) => {
  if (!Array.isArray(keywords)) {
    keywords = [keywords];
  }

  // 공백을 제거한 keywords 생성
  let joinedKeywords = keywords.map((item) => item.split(' ').join(''));

  // 원본 desc를 수정할 변수
  let highlightedDesc = desc;

  // 각 키워드에 대해 처리
  joinedKeywords.forEach((keyword, index) => {
    const originalKeyword = keywords[index];
    const regex = new RegExp(
      keyword
        .split('')
        .map((char) => {
          if (char === '(' || char === ')' || char === '.') {
            return `\\${char}`;
          }
          return `\\s*${char}`;
        })
        .join(''),
      'g',
    );

    // 첫 번째 매치만 하이라이트
    highlightedDesc = highlightedDesc.replace(regex, (match) => {
      if (joinedKeywords.includes(keyword)) {
        joinedKeywords = joinedKeywords.filter((kw) => kw !== keyword);
        return `<span id="${spanId}">${originalKeyword}</span>`;
      }
      return match;
    });
  });

  return highlightedDesc;
};
